import styles from './styles.module.css'
import likeWhite from '../../assets/like.png'
import likeBlue from '../../assets/Likeblue.png'

interface LikeButtonProps {
    likes: number;
    isLiked: boolean;
    onToggleLike: () => void;
}

export default function LikeButton({ likes, isLiked, onToggleLike }: LikeButtonProps) {

    return (
        <div className={styles.likeContainer}>
            <button 
                onClick={onToggleLike}
                className={isLiked ? styles.likedButton : ''}
            >
                <img src={isLiked ? likeBlue : likeWhite} alt="icone de like" />
                Like • {likes}
            </button> 
        </div>
    )
}