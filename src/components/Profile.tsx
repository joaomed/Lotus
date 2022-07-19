import { FaArrowUp} from 'react-icons/fa'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaomed.png" alt="João Vitor Medeiros" />
      <div>
        <strong>João Vitor Medeiros</strong> 
        <p> 
          <FaArrowUp/>
          Level {level}</p>                
      </div>
    </div>
  );
}