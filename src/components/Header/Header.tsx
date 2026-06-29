import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Peter Menh</h1>
      <p>Frontend Developer | Portfolio</p>
    </header>
  );
}
