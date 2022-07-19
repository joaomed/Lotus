import { createContext, ReactNode, useEffect, useState } from "react";

import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience:number;
    challengesCompleted: number; 
    activeChallenge: Challenge;
    experienceToNextLevel: number; 
    levelUp: () => void;
    challengeUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children }:ChallengesProviderProps) {
  const [level,setLevel] = useState(1);
  const [currentExperience,setCurrentExperience] = useState(0);
  const [challengesCompleted,setChallengesCompleted] = useState(0);
  const [activeChallenge,setActiveChallenge] = useState(null);

  //Calculo de levels rpg
  const experienceToNextLevel = Math.pow((level + 1)*4,2)

  useEffect(()=>{
    Notification.requestPermission();
  },[])


  function levelUp(){
    setLevel(level + 1);
  }

  function challengeUp(){
    setChallengesCompleted(challengesCompleted + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    //tocar Audio
    new Audio('notification.mp3').play()

    //mandar notificação
    if (Notification.permission === 'granted'){
      new Notification('Novo desafio 🚀', {
        body: `Valendo ${challenge.amount}xp!`,
        silent: true
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null)
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const{ amount } = activeChallenge;

    // utilizar let para variar a experiencia dependendo do quanto ela vai precisar para o proximo level
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();      
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    challengeUp();
  }

  return(
    <ChallengesContext.Provider 
    value={{ 
      level, 
      currentExperience, 
      challengesCompleted,  
      activeChallenge,
      experienceToNextLevel,
      levelUp, 
      challengeUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}