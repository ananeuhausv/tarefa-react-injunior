import { useEffect, useState } from 'react'
import HeaderCardPost from '../HeaderCardPost/HeaderCardPost'
import TextareaCardPost from '../TextareaCardPost/TextareaCardPost'
import styles from './styles.module.css'
import Comments from '../Comments/Comments'
import foto from '../../assets/foto.ana.png'

export interface CardPostProps{
    picture: string
    name: string
    profession: string
    post?: string
    timePosted: Date
}

interface Comment {
    id: number;
    name: string;
    photo: string;
    text: string;
    timePosted: string;
    likes: number;
}

export default function CardPost({ picture, name, profession, post }: CardPostProps) {
    const [timePosted, setTimePosted] = useState<Date | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        setTimePosted(new Date());
    },[]);

    const handleAddComment = (text: string) => {
        const newComment: Comment = {
            id: Date.now(),
            name: "Ana Laura", 
            photo: foto,  
            text: text,
            timePosted: new Date().toISOString(), 
            likes: 0
        };
        setComments([...comments, newComment]);
    };

    const deleteComment = (id: number) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    const getTimeElapsed = (timePosted: string) => {
        const postedDate = new Date(timePosted);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

        if (diffInSeconds < 60) return `Cerca de ${diffInSeconds} segundos`;
        if (diffInSeconds < 3600) return `Cerca de ${Math.floor(diffInSeconds / 60)} min`;
        if (diffInSeconds < 86400) return `Cerca de ${Math.floor(diffInSeconds / 3600)} h`;
        return `Cerca de ${Math.floor(diffInSeconds / 86400)} dias`;
    };

    const [elapsedTimes, setElapsedTimes] = useState<Record<number, string>>({});

    useEffect(() => {
        const updateTimes = () => {
            setElapsedTimes((_prevTimes) => {
                const newTimes: Record<number, string> = {};
                [...fixedComments, ...comments].forEach((comment) => {
                    newTimes[comment.id] = getTimeElapsed(comment.timePosted);
                });
                return newTimes;
            });
        };

        updateTimes(); 
        const interval = setInterval(updateTimes, 10000); //cada 10 segundos

        return () => clearInterval(interval);
    }, [comments]); 


    const fixedComments: Comment[] = [
        {
            id: 1,
            name: "Felyppe Nunes",
            photo: 'https://img.freepik.com/fotos-premium/homem-de-terno-e-gravata-posando-para-uma-foto-ia-geradora_97167-19520.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            likes: 5
        },
        {
            id: 2,
            name: "Mellany Carter",
            photo: 'https://img.freepik.com/fotos-premium/mulher-profissional-realizada-em-ia-generativa-de-escritorio_896194-2958.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
            likes: 3
        },
        {
            id: 3,
            name: "Jessy Logan",
            photo: 'https://img.freepik.com/fotos-premium/feliz-jovem-profissional-com-ia-generativa_431161-16663.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
            likes: 7
        }
    ];

    return (
        <div className={styles.container}>
            {timePosted && (
                <HeaderCardPost name={name} picture={picture} profession={profession} timePosted={timePosted}/>
            )}
            <div className={styles.post}>
                <p>{post}</p>
            </div>
            <TextareaCardPost onAddComment={handleAddComment}/>

            {fixedComments.map((comment) => (
                <Comments
                    key={comment.id}
                    commentData={{...comment, timePosted: elapsedTimes[comment.id] || getTimeElapsed(comment.timePosted) }}
                    onDeleteComment={() => {}}
                />
            ))}

            {comments.map((comment)=> (
                <Comments 
                    key={comment.id} 
                    commentData={{...comment, timePosted: elapsedTimes[comment.id] || getTimeElapsed(comment.timePosted) }}
                    onDeleteComment={() => deleteComment(comment.id)}
                />
            ))}
        </div>
    )
}