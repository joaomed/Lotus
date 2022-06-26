import styles from '../styles/components/Profile.module.css'
import { FaArrowUp} from 'react-icons/fa'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaomed.png" alt="João Vitor Medeiros" />
      <div>
        <strong>João Vitor Medeiros</strong> 
        <p> 
          <FaArrowUp/>
          Level 1</p>                
      </div>
    </div>
  );
}