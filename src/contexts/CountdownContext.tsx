import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes:number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){
  const {startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1*60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  
  const minutes = Math.floor(time/60)
  const seconds = time % 60

  function startCountdown(){
    setIsActive(true)
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
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
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  },[isActive, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}