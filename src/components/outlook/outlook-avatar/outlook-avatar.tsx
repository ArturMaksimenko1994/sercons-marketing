import { useState } from "react";
import { useAuth } from "./../../../utils/auth-context";
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

export default function OutlookAvatar({ onFileUpload }: { onFileUpload: (url: string) => void }) {
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
        files={files}
        //@ts-ignore
        onupdatefiles={setFiles}
        allowMultiple={false}
        filePosterMaxHeight={256}
        onprocessfile={(error, file) => {
          if (error) {
            console.error('Ошибка при загрузке файла:', error);
            return;
          }
          try {
            const response = JSON.parse(file.serverId);
            const fileUrl = response?.source_url;
            if (fileUrl) {
              onFileUpload(fileUrl);
            } else {
              console.error('В ответе не найден исходный URL-адрес:', response);
            }
          } catch (parseError) {
            console.error('Ошибка при разборе файла ServerID:', parseError);
          }
        }}
        server={{
          url: 'http://www.signature.custom-wp.ru/wp-json/wp/v2',
          process: {
            url: '/media',
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`
            },
            onload: (response) => {
              console.log('Server response:', response);
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
              /* optional image writer options here */
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
          },
        }}
      />
    </div>
  );
}
