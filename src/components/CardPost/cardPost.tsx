import { useEffect, useState } from 'react'
import HeaderCardPost from '../HeaderCardPost/HeaderCardPost'
import TextareaCardPost from '../TextareaCardPost/TextareaCardPost'
import styles from './styles.module.css'
import Comments from '../Comments/Comments'


export interface CardPostProps{
    picture: string
    name: string
    profession: string
    post?: string
    timePosted: Date
}

export default function CardPost({ picture, name, profession, post }: CardPostProps) {
    const [timePosted, setTimePosted] = useState<Date | null>(null);

    useEffect(() => {
        setTimePosted(new Date());
    },[]);

    const [comments, setComments] = useState<string[]>([]);

    const handleAddComment = (comment: string) => {
        setComments([...comments, comment]);
    };

    return (
        <div className={styles.container}>
            {timePosted && (
                <HeaderCardPost name={name} picture={picture} profession={profession} timePosted={timePosted}/>
            )}
        <div className={styles.post}>
            <p>{post}</p>
        </div>
        <TextareaCardPost onAddComment={handleAddComment}/>
        {comments.map((comment, index)=> (
            <Comments key={index} comment={ comment }/>
        )) }
        
        </div>
    )
}