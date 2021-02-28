import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marcelovilela.png" alt="Marcelo Vilela" />

      <div>
        <strong>Marcelo Vilela</strong>
        <p>Level {level}</p>
      </div>
    </div>
  )
}
