import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){ 
  const [time, setTime] = useState(0.1*60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  
  const minutes = Math.floor(time/60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

  function startCountdown(){
    setIsActive(true)
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1*60)
  }

  // useEffect = quero que execute uma função quando o "active" muda e o "time"
  useEffect(()=>{
    if(isActive && time>0){
      // setTimeout= quero que aconteça algo depois de um tempo
      // vai executar uma função depois de 1segundo
    countdownTimeout = setTimeout(()=>{
        setTime(time - 1)
      },1000) 
    }
    else if (isActive && time === 0){
      console.log('finalizou aqui')
      setHasFinished(true)
      setIsActive(false)
    }
  },[isActive, time])

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>     
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>     
        </div>
      </div>

      { hasFinished ? (     

        <button
        disabled         
        className={`${styles.countdownButton}`}
        > Ciclo encerrado </button>

      ) : (
        <>
          { isActive ? (
          <button 
          type='button' 
          className={`${styles.countdownButton} ${styles.countdownButtonActive} `}
          onClick={resetCountdown}
          > Abandonar Ciclo </button>
        ) : (
          <button 
          type='button' 
          className={styles.countdownButton}
          onClick={startCountdown}
          > Iniciar Ciclo </button>
        ) }
      </>
      )}

     
    </div>
  )
}