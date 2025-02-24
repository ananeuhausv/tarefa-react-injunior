import styles from './styles.module.css'
import likeWhite from '../../assets/like.png'
import likeBlue from '../../assets/Likeblue.png'
import useCounter from "../../hooks/useCounter"

export default function LikeButton() {

    const { counter, isLiked, toggleLike } = useCounter();

    return (
        <div className={styles.likeContainer}>
            <button 
                onClick={toggleLike}
                className={isLiked ? styles.likedButton : ''}
            >
                <img src={isLiked ? likeBlue : likeWhite} alt="icone de like" />
                Like • {counter}
            </button> 
        </div>
    )
}