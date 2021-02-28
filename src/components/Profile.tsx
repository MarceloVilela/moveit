import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marcelovilela.png" alt="Marcelo Vilela" />

      <div>
        <strong>Marcelo Vilela</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}