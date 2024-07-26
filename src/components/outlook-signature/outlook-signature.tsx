import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { TemplateOutlookSignature } from "../../templates/template-outlook-signature/template-outlook-signature";

interface IProps {
  inputName: string;
  inputFamily: string;
  inputPatronymic: string;
  inputPosition: string;
  inputTelephone: string;
  inputTelephoneExt: string;
  inputTelephoneSecond: string;
  inputAddress: string;
}

export function OutlookSignature({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress }: IProps) {
  const [emailHTML, setEmailHTML] = useState('');

  useEffect(() => {
    const html = renderToStaticMarkup(
      <TemplateOutlookSignature
        inputName={inputName}
        inputFamily={inputFamily}
        inputPatronymic={inputPatronymic}  
        inputPosition={inputPosition}
        inputTelephone={inputTelephone}
        inputTelephoneExt={inputTelephoneExt}
        inputTelephoneSecond={inputTelephoneSecond}
        inputAddress={inputAddress}
      />
    );
    setEmailHTML(html);
  }, [inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress]);

  const handleDownload = () => {
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.htm';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: emailHTML }} />
      <button onClick={handleDownload}>Скачать Signature</button>
    </>
  );
}