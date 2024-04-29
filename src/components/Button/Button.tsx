import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

const Button = (props: ButtonProps) => {
  return <button className={styles.button} {...props}></button>;
};

export default Button;
