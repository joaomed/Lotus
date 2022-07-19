import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css'
import { ImArrowUp} from 'react-icons/im'
import { BiWalk} from 'react-icons/bi'
import { useContext } from 'react';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);  

  return(

    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>          
            <BiWalk  />
            <strong>Novo desafio</strong>
            <p> {activeChallenge.description} </p>
          </main>

          <footer>
            <button 
            type='button' 
            className={styles.challengeFailedButton}
            onClick={resetChallenge}
            >Falhei
            
            </button>
            <button 
            type='button' 
            className={styles.challengeSucceededButton}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber um desafio.
          </strong>
          <p>    
            <ImArrowUp/>    
            Avance de level completando desafios
          </p>
        </div> 
      )}
    
  </div>
   
  )
}