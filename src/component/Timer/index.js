import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
export default function Timer({ deadline }) {
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const deadlineDate = new Date(deadline);
        const time = deadlineDate.getTime() - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.main}>
            <div className = {styles.heading}>Time Left</div>
            <div className={styles.container}>
                <div className={styles.col}>
                    <div>Days</div>
                    <div>{days}</div>
                </div>

                <div className={styles.col}>
                    <div>Hours</div>
                    <div>{hours}</div>
                </div>

                <div className={styles.col}>
                    <div>Minutes</div>
                    <div>{minutes}</div>
                </div>

                <div className={styles.col}>
                    <div>Seconds</div>
                    <div>{seconds}</div>
                </div>

            </div>
        </div>
    )
}
