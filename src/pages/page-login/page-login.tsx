import React, { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../utils/auth-context';
import styles from "./page-login.module.css";

import { BASE_URL } from "./../../api/api-сonfig";
import authorizationSvg from "./../../assets/img/page-login/authorization.svg";

const PageLogin: React.FC = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      navigate('/signature');
    }
  }, [token, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const response = await fetch(`${BASE_URL}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setToken(data.token);
      navigate('/signature');
    } else {
      setError('Ошибка входа. Пожалуйста, проверьте свое имя пользователя и пароль');
    }
  };

  return (
    <section className={styles.block}>
      <div className="container">
        <div className={styles.block__row}>
          <div className={styles.block__panel}>
            <div className={styles.block__aut}>
              <h1 className={styles.block__title}>Добро пожаловать в <span>Sercons Marketing</span></h1>
              <form className={styles.block__form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                  <p className={styles.text}>Почта</p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Ваша почта"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </span>
                </label>

                <label className={styles.label}>
                  <p className={styles.text}>Пароль </p>
                  <span className={styles.span}>
                    <i className={styles.icon}></i>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="Ваш пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </span>
                </label>

                <button className={styles.block__btn} type="submit">
                  Войти
                </button>
              </form>
            </div>
            {error && <p className={styles.block__error}>{error}</p>}
          </div>
          <div className={styles.block__picture}>
            <img
              className={styles.block__img}
              src={authorizationSvg}
              alt="авторизация-svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLogin;


