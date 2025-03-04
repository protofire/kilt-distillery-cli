import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="/kilt-logo.svg" alt="KILT Logo" className={styles.logo} />
      <h1 className={styles.heading}>Cookbook for attestation</h1>
    </div>
  )
}
