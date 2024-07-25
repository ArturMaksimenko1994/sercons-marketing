import { ChangeEvent, useState } from "react";

import styles from "./page-signature.module.css"
import { OutlookSignature } from "./../../components/outlook-signature/outlook-signature"

const PageSignature = () => {
  const [inputName, setInputName] = useState('Артур');
  const [inputFamily, setInputFamily] = useState('Максименко');
  const [inputPatronymic, setInputPatronymic] = useState('Сергеевич');
  const [inputPosition, setInputPosition] = useState('Программист');
  const [inputTelephone, setInputTelephone] = useState('8 (985) 917-99-89');
  const [inputTelephoneExt, setInputTelephoneExt] = useState('3325');
  const [inputTelephoneSecond, setInputTelephoneSecond] = useState('8 (985) 376-69-66');
  const [inputAddress, setInputAddress] = useState('г. Москва, улица Шаболовка, 31Г');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleFamilyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputFamily(event.target.value);
  };

  const handleInpuPatronymic = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPatronymic(event.target.value);
  };

  const handleInpuPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPosition(event.target.value);
  };

  const handleInpuTelephone = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTelephone(event.target.value);
  };

  const handleInpuTelephoneExt = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTelephoneExt(event.target.value);
  };

  const handleInpuTelephoneSecond = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTelephoneSecond(event.target.value);
  };

  const handleInputAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
  };

  return (
    <section className={styles.signature}>
      <div className="container">

        <div className={styles.signature__widget}>
          <div className={styles.signature__title}>
            <h1>Персональные данные</h1>
          </div>
          <div className={styles.signature__row}>
            <div className={styles.signature__picture}>
              <img className={styles.signature__avatar} src="http://www.signature.custom-wp.ru/wp-content/uploads/2024/07/signature-avatar.png" alt="avatar" />
            </div>

            <div className={styles.signature__data}>

              <div className={styles.signature__information}>

                <label className={styles.label}>
                  <p className={styles.text}>Имя</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Имя"
                      value={inputName}
                      onChange={handleNameChange}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Фамилия</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Фамилия"
                      value={inputFamily}
                      onChange={handleFamilyChange}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Отчество</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Отчество"
                      value={inputPatronymic}
                      onChange={handleInpuPatronymic}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Телефон</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Телефон"
                      value={inputTelephone}
                      onChange={handleInpuTelephone}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Телефон доб.</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Телефон добавочный"
                      value={inputTelephoneExt}
                      onChange={handleInpuTelephoneExt}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Стационарыный телефона</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Телефон"
                      value={inputTelephoneSecond}
                      onChange={handleInpuTelephoneSecond}
                    />
                  </span>
                </label>

                <label className={styles.label} >
                  <p className={styles.text}>Должность</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Должность"
                      value={inputPosition}
                      onChange={handleInpuPosition}
                    />
                  </span>
                </label>

                <label className={`${styles.label} ${styles['label--column-2']}`}>
                  <p className={styles.text}>Адрес</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Адрес"
                      value={inputAddress}
                      onChange={handleInputAddress}
                    />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.signature__widget}>

          <OutlookSignature
            inputName={inputName}
            inputFamily={inputFamily}
            inputPatronymic={inputPatronymic}
            inputPosition={inputPosition}
            inputTelephone={inputTelephone}
            inputTelephoneExt={inputTelephoneExt}
            inputTelephoneSecond={inputTelephoneSecond}
            inputAddress={inputAddress}
          />

        </div>
      </div>
    </section>
  )
}

export default PageSignature;