import styles from './styles.module.css'
import { CardPostProps } from '../CardPost/cardPost'
import { useEffect, useRef, useState } from 'react';

const formatTime = (time: Date) => {
    const postDate = new Date(time);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (diffInSeconds < 60) return `Postado há ${diffInSeconds} segundos`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `Postado há ${diffInMinutes} minutos`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `Postado há ${diffInHours} horas`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `Postado há ${diffInDays} dias`;
};

export default function HeaderCardPost({ picture, name, profession, timePosted }: CardPostProps) {
    const[formattedTime, setFormattedTime] = useState(formatTime(timePosted));
    const timePostedRef = useRef(timePosted);

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedTime(formatTime(timePostedRef.current));
        },10000);

        return () => clearInterval(interval);
    },[]);
    

    return (
        <div className={styles.header}>
        <div>
            <img src={picture} alt="foto de perfil do dono do post" />
            <div>
                <h1>{name}</h1>
                <p>{profession}</p>
            </div>
        </div> 
        <p>{formattedTime}</p>
    </div> 
    )
}