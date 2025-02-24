import styles from './styles.module.css'

interface CommentButtonProps {
    onClick: () => void;
}

export default function CommentButton({ onClick }: CommentButtonProps) {
    return (
        <div className={styles.button}>
            <button onClick={onClick}>Comentar</button>
        </div>
    )
}