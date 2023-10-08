import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &Copy; Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
