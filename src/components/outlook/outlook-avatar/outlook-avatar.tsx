import { useState } from "react";
import { useAuth } from "./../../../utils/auth-context";
import { BASE_URL } from "./../../../api/api-сonfig";
import styles from "./outlook-avatar.module.css";

// pintura
import "@pqina/pintura/pintura.css";
import {
  openEditor,
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  processImage,
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
} from "@pqina/pintura";

// filepond
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";

registerPlugin(FilePondPluginImageEditor, FilePondPluginFilePoster);

// pintura
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

export default function OutlookAvatar({
  onFileUpload,
}: {
  onFileUpload: (url: string) => void;
}) {
  const [files, setFiles] = useState([]);
  const { token } = useAuth();

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.avatar}>
      <style>
        {`
          .filepond--credits {
              display: none;
          }
        `}
      </style>
      <FilePond
        instantUpload={false}
        files={files}
        //@ts-ignore
        onupdatefiles={setFiles}
        allowMultiple={false}
        filePosterMaxHeight={256}
        onprocessfile={(error, file) => {
          if (error) {
            console.error("Ошибка при загрузке файла:", error);
            return;
          }
          try {
            const response = JSON.parse(file.serverId);
            const fileUrl = response?.source_url;
            if (fileUrl) {
              onFileUpload(fileUrl);
            } else {
              console.error("В ответе не найден исходный URL-адрес:", response);
            }
          } catch (parseError) {
            console.error("Ошибка при разборе файла ServerID:", parseError);
          }
        }}
        server={{
          url: `${BASE_URL}/wp-json/wp/v2`,
          process: {
            url: "/media",
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            onload: (response) => {
              console.log("Server response:", response);
              return response; // Возвращаем сырое значение serverId
            },
            onerror: (response) => response.data,
          },
        }}
        name="file"
        labelIdle='Перетащите файл сюда или <span class="filepond--label-action">выберите</span>'
        imageEditor={{
          // map legacy data objects to new imageState objects
          legacyDataToImageState: legacyDataToImageState,

          // used to create the editor, receives editor configuration, should return an editor instance
          createEditor: openEditor,

          // Required, used for reading the image data
          imageReader: [
            createDefaultImageReader,
            {
              /* optional image reader options here */
            },
          ],

          // optionally. can leave out when not generating a preview thumbnail and/or output image
          imageWriter: [
            createDefaultImageWriter,
            {
              outputFormat: "image/png", // Устанавливаем формат PNG для сохранения

              targetSize: {
                width: 256,
                height: 256,
              },
              // Convert to PNG so masked area is transparent
              mimeType: "image/png",

              // Run custom processing on the image data
              postprocessImageData: (imageData: any) =>
                new Promise((resolve) => {
                  // Create a canvas element to handle the imageData
                  const canvas = document.createElement("canvas");
                  canvas.width = imageData.width;
                  canvas.height = imageData.height;
                  const ctx = canvas.getContext("2d")!;
                  ctx.putImageData(imageData, 0, 0);

                  // Only draw image where we render our circular mask
                  ctx.globalCompositeOperation = "destination-in";

                  // Draw our circular mask
                  ctx.fillStyle = "black";
                  ctx.beginPath();
                  ctx.arc(
                    imageData.width * 0.5,
                    imageData.height * 0.5,
                    imageData.width * 0.5,
                    0,
                    2 * Math.PI
                  );
                  ctx.fill();

                  // Returns the modified imageData
                  resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));
                }),
            },
          ],

          // used to generate poster images, runs an editor in the background
          imageProcessor: processImage,

          // editor options
          editorOptions: {
            utils: ["crop", "finetune", "filter", "annotate"],
            imageOrienter: createDefaultImageOrienter(),
            shapePreprocessor: createDefaultShapePreprocessor(),
            ...plugin_finetune_defaults,
            ...plugin_filter_defaults,
            ...markup_editor_defaults,
            locale: {
              ...locale_en_gb,
              ...plugin_crop_locale_en_gb,
              ...plugin_finetune_locale_en_gb,
              ...plugin_filter_locale_en_gb,
              ...plugin_annotate_locale_en_gb,
              ...markup_editor_locale_en_gb,
            },
            // Настройки обрезки
            imageCropAspectRatio: 1, // Соотношение сторон 1:1 (квадрат)
            willRenderCanvas: (shapes: any, state: any) => {
              const {
                utilVisibility,
                selectionRect,
                lineColor,
                backgroundColor,
              } = state;

              // Exit if crop utils is not visible
              if (utilVisibility.crop <= 0) return shapes;

              // Get variable shortcuts to the crop selection rect
              const { x, y, width, height } = selectionRect;

              return {
                // Copy all props from current shapes
                ...shapes,

                // Add an inverted ellipse shape for the circular mask
                interfaceShapes: [
                  {
                    x: x + width * 0.5,
                    y: y + height * 0.5,
                    rx: width * 0.5,
                    ry: height * 0.5,
                    opacity: utilVisibility.crop,
                    inverted: true,
                    backgroundColor: [...backgroundColor, 0.5],
                    strokeWidth: 1,
                    strokeColor: [...lineColor],
                  },
                  // Spread all existing interface shapes onto the array
                  ...((shapes as any).interfaceShapes || []),
                ],
              };
            },
          },
        }}
      />
    </div>
  );
}