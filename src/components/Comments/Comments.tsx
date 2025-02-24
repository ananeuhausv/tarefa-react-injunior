import styles from "./styles.module.css"
import foto from '../../assets/foto.ana.png'
import trash from '../../assets/Trash.png'

import LikeButton from "../LikeButton/LikeButton"

interface CommentsProps {
    comment: string;
}

export default function Comments({ comment }: CommentsProps) {

    return(
        <div>
           <div className={styles.comments}>
                <img src={foto} alt="foto de perfil"/>
                <div>
                    <div>
                        <div>
                            <h3>Felyppe Nunes</h3>
                            <p>Cerca de 2h</p> 
                        </div>
                        <img src={trash} alt="icone de lixeira" /> 
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
            <LikeButton/>
        </div> 
    )
}
