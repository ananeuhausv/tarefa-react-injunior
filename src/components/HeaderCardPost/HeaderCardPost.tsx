import styles from './styles.module.css'
import { CardPostProps } from '../CardPost/cardPost'

export default function HeaderCardPost({ picture, name, profession, timePosted }: CardPostProps) {
    return (
        <div className={styles.header}>
        <div>
            <img src={picture} alt="foto de perfil do dono do post" />
            <div>
                <h1>{name}</h1>
                <p>{profession}</p>
            </div>
        </div> 
    <p>{timePosted}</p>
    </div> 
    )
}