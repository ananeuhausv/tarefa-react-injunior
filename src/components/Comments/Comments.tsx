import styles from "./styles.module.css"
import trash from '../../assets/Trash.png'
import LikeButton from "../LikeButton/LikeButton"

interface CommentsProps {
    commentData: {
        id: number;
        name: string;
        photo: string;
        text: string;
        timePosted: string;
        likes: number;
    };
    onDeleteComment: () => void;
}

export default function Comments({ commentData, onDeleteComment }: CommentsProps) {

    return(
        <div>
           <div className={styles.comments}>
                <img src={commentData.photo} alt="foto de perfil"/>
                <div>
                    <div>
                        <div>
                            <h3>{commentData.name}</h3>
                            <p>{commentData.timePosted}</p> 
                        </div>
                        <button onClick={onDeleteComment}>
                           <img src={trash} alt="icone de lixeira" /> 
                        </button>
                    </div>
                    <p>{commentData.text}</p>
                </div>
            </div>
            <LikeButton/>
        </div> 
    )
}
