import { useEffect, useState } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

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

      {isActive ? (
        <button
          onClick={startCountdown}
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
    </div>
  );
}
