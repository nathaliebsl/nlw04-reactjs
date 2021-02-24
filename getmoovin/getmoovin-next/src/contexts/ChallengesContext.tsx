import { type } from "os";
import { createContext, ReactNode, useState } from "react";

//tipo de propriedade
interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("novo desafio");
  }

  return (
    <ChallengesContext.Provider
      value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
