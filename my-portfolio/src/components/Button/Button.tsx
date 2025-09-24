import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
