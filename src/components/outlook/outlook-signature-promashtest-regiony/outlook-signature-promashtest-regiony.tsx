import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { TemplateOutlookSignaturePromashtestRegiony} from "../../../templates/templates-outlook-signature/template-outlook-signature-promashtest-regiony";

import { ISignatureProps } from "./../../../utils/type";

export function OutlookSignaturePromashtestRegiony({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress, avatarUrl }: ISignatureProps) {
  const [emailHTML, setEmailHTML] = useState('');

  useEffect(() => {
    const html = renderToStaticMarkup(
      <TemplateOutlookSignaturePromashtestRegiony
        inputName={inputName}
        inputFamily={inputFamily}
        inputPatronymic={inputPatronymic}
        inputPosition={inputPosition}
        inputTelephone={inputTelephone}
        inputTelephoneExt={inputTelephoneExt}
        inputTelephoneSecond={inputTelephoneSecond}
        inputAddress={inputAddress}
        avatarUrl={avatarUrl}
      />
    );
    setEmailHTML(html);
  }, [inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress, avatarUrl]);

  const handleDownload = () => {
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `signature.htm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: emailHTML }} />
      <button className="btn-download" onClick={handleDownload}>
        Скачать
      </button>
    </>
  );
}