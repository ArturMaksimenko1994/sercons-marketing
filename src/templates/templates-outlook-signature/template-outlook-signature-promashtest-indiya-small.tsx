import { Column, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import { HeadCustom } from './components/HeadCustom';

import { ISignatureProps } from "./../../utils/type";

export function TemplateOutlookSignaturePromashtestIndiyaSmall({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress, avatarUrl }: ISignatureProps) {
  return (
    <>
      <Html lang="ru">
        <HeadCustom />
        <Section>
          <Row align='left' width="660" style={{ width: "660px", maxWidth: "660px", backgroundColor: "#F1F1F1", color: "#000000", margin: "0" }}>
            <Column align='left' style={{ paddingTop: "12px", paddingBottom: "12px", }}>
              <Row>
                <Column width="10" style={{ backgroundColor: "#D88802" }}></Column>
                <Column style={{ backgroundColor: "#F1F1F1", width: "8px" }}></Column>
                <Column style={{ backgroundColor: "#D0D0D0" }} width='420'>
                  <Section>
                    <Row>
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
                              <table role="presentation" style={{ backgroundColor: "#D88802", fontSize: "14px", color: "#FFF", fontFamily: "'Arial', sans-serif" }}>
                                <tr>
                                  <td style={{ padding: "2px 4px" }}>
                                    {inputPosition}
                                  </td>
                                </tr>
                              </table>
                            </Column>
                          </Row>
                        )}

                        <Row>
                          <Column height="12" style={{ lineHeight: "12px" }}></Column>
                        </Row>

                        {/* толефон */}
                        {inputTelephoneSecond && (
                          <Row style={{ paddingBottom: "2px" }}>
                            <Column style={{ width: "16px" }}>
                              <Img src="https://api.marketing.serconsrus.ru/wp-content/uploads/2024/08/icon-tell.png" alt="telephone" width="16" height='16' />
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
                              <Img src="https://api.marketing.serconsrus.ru/wp-content/uploads/2024/08/icon-mob.png" alt="telephone" width="16" height='16' />
                            </Column>
                            <Column valign='middle' style={{ paddingLeft: "6px" }}>
                              <Link href={`tel:${inputTelephone}`} style={{ display: "inline-block", margin: "0", fontSize: "13px", color: "#000", fontFamily: "'Arial', sans-serif", lineHeight: "12px" }}>{inputTelephone}</Link>
                            </Column>
                          </Row>
                        )}

                        {/* адрес */}
                        {inputAddress && (
                          <Row style={{ paddingTop: "2px" }}>
                            <Column style={{ width: "16px" }}>
                              <Img src="https://api.marketing.serconsrus.ru/wp-content/uploads/2024/08/icon-map.png" alt="telephone" width="16" height='16' />
                            </Column>
                            <Column valign='middle' style={{ paddingLeft: "6px" }}>
                              <Text style={{ display: "inline-block", margin: "0", fontSize: "13px", color: "#000", fontFamily: "'Arial', sans-serif", lineHeight: "12px" }}>{inputAddress}</Text>
                            </Column>
                          </Row>
                        )}

                        <Row>
                          <Column height="12" style={{ lineHeight: "12px" }}></Column>
                        </Row>

                      </Column>
                      <Column style={{ width: "14px" }}></Column>
                    </Row>
                  </Section>
                </Column>
                <Column style={{ width: "15px" }}></Column>
                <Column style={{ width: '180px' }} >
                  <Row align='right'>
                    <Column align='right'>
                      <Link href="https://prommash-test.ru/">
                        <Img src="https://api.marketing.serconsrus.ru/wp-content/uploads/2024/08/logo-indiya.png" alt="telephone" width="180" height="18" />
                      </Link>
                    </Column>
                  </Row>
                  <Row style={{ paddingTop: "70px" }}>
                    <Column align='right' >
                      <Img src="https://api.marketing.serconsrus.ru/wp-content/uploads/2024/08/icon-indiya.png" alt="telephone" width="20" height="24" />
                    </Column>
                  </Row>
                  <Row>
                    <Column align='right'>
                      <Link href="https://prommash-test.ru/" style={{ color: "#444", fontSize: "14px", fontWeight: "700", textDecoration: "underline", fontFamily: "'Arial', sans-serif" }}>prommash-test.ru</Link>
                    </Column>
                  </Row>
                </Column>
                <Column style={{ width: "15px" }}></Column>
                <Column width="10" style={{ backgroundColor: "#D88802" }}></Column>
              </Row>
            </Column>
          </Row >
        </Section >
        <Preview>Тут описание Preview компонента signature</Preview>
      </Html >
    </>
  );
}