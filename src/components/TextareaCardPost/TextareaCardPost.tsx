import styles from './styles.module.css'

export default function TextareaCardPost() {
    return (
        <div className={styles.feedback}>
            <h3>Deixe seu feedback</h3>
            <textarea placeholder="Escreva um comentário..."></textarea>
        </div> 
    )
}