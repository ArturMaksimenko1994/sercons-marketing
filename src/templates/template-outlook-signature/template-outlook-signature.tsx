import React from 'react';
import { Button, Column, Container, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import { HeadCustom } from './components/HeadCustom';

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

export function TemplateOutlookSignature({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress }: IProps) {
  return (
    <>
      <Html lang="ru">
        <HeadCustom />
        <Section style={{ backgroundColor: "#F1F1F1", color: "#000000", paddingTop: "12px", paddingBottom: "12px", tableLayout: "auto", width: "800px", margin: "0" }}>
          <Row>
            <Column style={{ backgroundColor: "#C6152C", width: "10px" }}></Column>
            <Column style={{ backgroundColor: "#F1F1F1", width: "8px" }}></Column>
            <Column style={{ backgroundColor: "#D0D0D0", paddingBottom: "14px", paddingTop: "14px", width: "560px" }}>
              <Section>
                <Row>
                  <Column style={{ width: "28px" }}></Column>
                  <Column style={{ width: "134px" }}>
                    <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-avatar.png" alt="avatar" width="100%" />
                  </Column>
                  <Column style={{ width: "28px" }}></Column>
                  <Column>
                    <Row style={{ paddingBottom: "14px" }}>
                      <Column>
                        <Text style={{ margin: "0", fontSize: "20px", color: "#000", fontWeight: "700", lineHeight: "20px", fontFamily: "'Arial', sans-serif;" }}>{inputFamily} <br />{inputName} {inputPatronymic}</Text>
                      </Column>
                    </Row>
                    <Row style={{ paddingBottom: "10px" }}>
                      <Column>
                        <Text style={{ display: "inline-block", margin: "0", fontSize: "14px", color: "#FFF", backgroundColor: "#C6152C", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "4px", paddingRight: "4px", fontFamily: "'Arial', sans-serif;" }}>{inputPosition}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={{ width: "16px" }}>
                        <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-telephone-icon.png" alt="telephone" width="100%" />
                      </Column>
                      <Column style={{ paddingLeft: "6px" }}>
                        <Link href={`tel:${inputTelephone}`} style={{ display: "inline-block", margin: "0", fontSize: "12px", color: "#000", fontFamily: "'Arial', sans-serif;" }}>{inputTelephone}  {`(доб. ${inputTelephoneExt})`}</Link >
                      </Column>
                    </Row>
                    <Row style={{ paddingTop: "3px", paddingBottom: "3px" }}>
                      <Column style={{ width: "16px" }}>
                        <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-telephone-2-icon.png" alt="telephone" width="100%" />
                      </Column>
                      <Column style={{ paddingLeft: "6px" }}>
                        <Link href={`tel:${inputTelephoneSecond}`} style={{ display: "inline-block", margin: "0", fontSize: "12px", color: "#000", fontFamily: "'Arial', sans-serif;" }}>{inputTelephoneSecond}</Link>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={{ width: "16px" }}>
                        <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-address-icon.png" alt="telephone" width="100%" />
                      </Column>
                      <Column style={{ paddingLeft: "6px" }}>
                        <Text style={{ display: "inline-block", margin: "0", fontSize: "12px", color: "#000", fontFamily: "'Arial', sans-serif;" }}>{inputAddress}</Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column style={{ width: "14px" }}></Column>
                </Row>
              </Section>
            </Column>
            <Column style={{ width: "32px" }}></Column>
            <Column style={{ width: '150px', verticalAlign: "top" }} >
              <Row>
                <Column align='right'>
                  <Link href="https://www.serconsrus.ru/">
                    <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-logo.png" alt="telephone" width="100%" />
                  </Link>
                </Column>
              </Row>
              <Row style={{ paddingTop: "116px" }}>
                <Column align='right'>
                  <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-link-icon.png" alt="telephone" width="20px" />
                  <Link href="https://www.serconsrus.ru/" style={{ color: "#444", fontSize: "14px", fontWeight: "700", textDecoration: "underline", fontFamily: "'Arial', sans-serif;" }}>www.serconsrus.ru</Link>
                </Column>
              </Row>
            </Column>
            <Column style={{ width: "32px" }}></Column>
            <Column style={{ backgroundColor: "#C6152C", width: "10px" }}></Column>
          </Row >
        </Section >
        <Preview>Тут описание Preview компонента signature</Preview>
      </Html >
    </>
  );
}

