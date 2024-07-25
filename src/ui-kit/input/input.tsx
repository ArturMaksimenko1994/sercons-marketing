import styles from "./input.module.css";

interface IProps {
  value?: string | undefined;
  type: string;
  placeholder: string;
  readonly?: boolean;
}

const Input = ({ type, placeholder, value }: IProps) => {
  return (
    <>
      <label className={styles.label}>
        <p className={styles.text}>Ваше имя</p>
        <span>
          <i className={styles.icon}></i>
          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value ? value : undefined}
          />
        </span>
      </label>
    </>
  )
}

export default Input;