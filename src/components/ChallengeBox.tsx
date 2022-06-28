import styles from '../styles/components/ChallengeBox.module.css'
import { ImArrowUp} from 'react-icons/im'
import { BiWalk} from 'react-icons/bi'



export function ChallengeBox(){
  const hasActiveChallenge = true;

  return(

    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>          
            <BiWalk  />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button 
            type='button' 
            className={styles.challengeFailedButton}
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