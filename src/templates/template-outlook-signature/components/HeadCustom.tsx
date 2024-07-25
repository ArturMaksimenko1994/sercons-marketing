import { Head, Font, CodeInline } from "@react-email/components";

export function HeadCustom() {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              -webkit-text-size-adjust: 100%; /* Предотвращает регулировку размера текста */
            }
            .custom-container {
              padding: 12px;
              border: solid 1px black;
              border-radius: 8px;
            }
          `}
        </style>
      </Head>

      <title>My email title</title>
    </>
  )
}