import { Head } from "@react-email/components";

export function HeadCustom() {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              -webkit-text-size-adjust: 100%; /* Предотвращает регулировку размера текста */
            }
          `}
        </style>
      </Head>

      <title>My email title</title>
    </>
  )
}