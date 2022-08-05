import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { AiOutlineClose } from 'react-icons/ai'

import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal (){
  const {level, closeLevelUpModal} = useContext(ChallengesContext)

  return(
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type='button' onClick={closeLevelUpModal}>
            <AiOutlineClose/>
          </button>
        </div>
      </div>     
  )
}