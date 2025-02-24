import CommentButton from '../CommentButton/CommentButton'
import HeaderCardPost from '../HeaderCardPost/HeaderCardPost'
import TextareaCardPost from '../TextareaCardPost/TextareaCardPost'
import styles from './styles.module.css'

export interface CardPostProps{
    picture: string
    name: string
    profession: string
    timePosted: string
    post?: string
}

export default function CardPost({ picture, name, profession, timePosted, post }: CardPostProps) {
    return (
        <div className={styles.container}>
        <HeaderCardPost name={name} picture={picture} profession={profession} timePosted={timePosted}/>
        <div className={styles.post}>
            <p>{post}</p>
        </div>
        <TextareaCardPost/>
        <CommentButton/>
        </div>
    )
}