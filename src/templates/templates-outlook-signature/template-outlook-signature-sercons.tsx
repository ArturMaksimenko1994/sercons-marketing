import { Column, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import { HeadCustom } from './components/HeadCustom';

import { ISignatureProps } from "./../../utils/type";

export function TemplateOutlookSignatureSercons({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress, avatarUrl }: ISignatureProps) {
  return (
    <>
      <Html lang="ru">
        <HeadCustom />
        <Section>
          <Row align='left' width="800" style={{ width: "800px", maxWidth: "800px", backgroundColor: "#F1F1F1", color: "#000000", margin: "0" }}>
            <Column align='left' style={{ paddingTop: "12px", paddingBottom: "12px", }}>
              <Row>
                <Column width="10" style={{ backgroundColor: "#C6152C" }}></Column>
                <Column style={{ backgroundColor: "#F1F1F1", width: "8px" }}></Column>
                <Column style={{ backgroundColor: "#D0D0D0" }} width='560'>
                  <Section>
                    <Row>
                      <Column style={{ width: "28px" }}></Column>
                      <Column width="134" style={{ borderCollapse: "collapse" }}>
                        <Img src={avatarUrl} alt="avatar" width="134" height="134" />
                      </Column>
                      <Column style={{ width: "28px" }}></Column>
                      <Column>

                        {/* ФИО */}
                        <Row>
                          <Column style={{ paddingBottom: "6px", paddingTop: "12px" }}>
                            <Text style={{ margin: "0", fontSize: "20px", color: "#000", fontWeight: "700", lineHeight: "20px", fontFamily: "'Arial', sans-serif" }}>{inputFamily} <br />{inputName} {inputPatronymic}</Text>
                          </Column>
                        </Row>

                        {/* Должность */}
                        {inputPosition && (
                          <Row>
                            <Column align='left' valign='middle' style={{ width: "100%" }}>
                              <table role="presentation" style={{ backgroundColor: "#C6152C", fontSize: "14px", color: "#FFF", fontFamily: "'Arial', sans-serif" }}>
                                <tr>
                                  <td style={{ padding: "2px 4px" }}>
                                    {inputPosition}
                                  </td>
                                </tr>
                              </table>
                            </Column>
                          </Row>
                        )}

                        {/* толефон */}
                        {inputTelephoneSecond && (
                          <Row style={{ paddingTop: "10px", paddingBottom: "2px" }}>
                            <Column style={{ width: "16px" }}>
                              <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/08/icon-2.png" alt="telephone" width="16" height='16' />
                            </Column>
                            <Column valign='middle' style={{ paddingLeft: "6px" }}>
                              <Link href={`tel:${inputTelephoneSecond}`} style={{ display: "inline-block", margin: "0", fontSize: "13px", color: "#000", fontFamily: "'Arial', sans-serif", lineHeight: "12px" }}>{inputTelephoneSecond} {inputTelephoneExt && `(доб. ${inputTelephoneExt})`}</Link >
                            </Column>
                          </Row>
                        )}

                        {/* 2 телефон */}
                        {inputTelephone && (
                          <Row>
                            <Column style={{ width: "16px" }}>
                              <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/08/icon-3.png" alt="telephone" width="16" height='16' />
                            </Column>
                            <Column valign='middle' style={{ paddingLeft: "6px" }}>
                              <Link href={`tel:${inputTelephone}`} style={{ display: "inline-block", margin: "0", fontSize: "13px", color: "#000", fontFamily: "'Arial', sans-serif", lineHeight: "12px" }}>{inputTelephone}</Link>
                            </Column>
                          </Row>
                        )}

                        {/* адрес */}
                        {inputAddress && (
                          <Row style={{ paddingBottom: "12px" }}>
                            <Column style={{ width: "16px" }}>
                              <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/08/icon-1.png" alt="telephone" width="16" height='16' />
                            </Column>
                            <Column valign='middle' style={{ paddingLeft: "6px" }}>
                              <Text style={{ display: "inline-block", margin: "0", fontSize: "13px", color: "#000", fontFamily: "'Arial', sans-serif", lineHeight: "12px" }}>{inputAddress}</Text>
                            </Column>
                          </Row>
                        )}

                      </Column>
                      <Column style={{ width: "14px" }}></Column>
                    </Row>
                  </Section>
                </Column>
                <Column style={{ width: "32px" }}></Column>
                <Column style={{ width: '150px' }} >
                  <Row align='right'>
                    <Column align='right'>
                      <Link href="https://www.serconsrus.ru/">
                        <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-logo.png" alt="telephone" width="150" height="30" />
                      </Link>
                    </Column>
                  </Row>
                  <Row style={{ paddingTop: "70px" }}>
                    <Column align='right' >
                      <Img src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-link-icon.png" alt="telephone" width="20" height="24" />
                    </Column>
                  </Row>
                  <Row>
                    <Column align='right'>
                      <Link href="https://www.serconsrus.ru/" style={{ color: "#444", fontSize: "14px", fontWeight: "700", textDecoration: "underline", fontFamily: "'Arial', sans-serif" }}>serconsrus.ru</Link>
                    </Column>
                  </Row>
                </Column>
                <Column style={{ width: "32px" }}></Column>
                <Column width="10" style={{ backgroundColor: "#C6152C" }}></Column>
              </Row>
            </Column>
          </Row >
        </Section >
        <Preview>Тут описание Preview компонента signature</Preview>
      </Html >
    </>
  );
}

