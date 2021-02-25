import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  

  return (
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

      {hasFinished ? (
        <button className={styles.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              // utilizando o `${} é possível concatenar duas strings numa chave de JavaScript {} dentro do "html" do componente
              type="button"
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              className={styles.countdownButton}
              type="button"
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
