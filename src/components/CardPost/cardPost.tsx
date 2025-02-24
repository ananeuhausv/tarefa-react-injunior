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

    useEffect(() => {
        setTimePosted(new Date());
    },[]);

    const [comments, setComments] = useState<Comment[]>([]);

    const handleAddComment = (text: string) => {
        const newComment: Comment = {
            id: Date.now(),
            name: "Ana Laura", 
            photo: foto,  
            text: text,
            timePosted: "Agora", 
            likes: 0
        };
        setComments([...comments, newComment]);
    };

    const deleteComment = (id: number) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    const fixedComments: Comment[] = [
        {
            id: 1,
            name: "Felyppe Nunes",
            photo: 'https://img.freepik.com/fotos-premium/homem-de-terno-e-gravata-posando-para-uma-foto-ia-geradora_97167-19520.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: "Cerca de 2h",
            likes: 5
        },
        {
            id: 2,
            name: "Mellany Carter",
            photo: 'https://img.freepik.com/fotos-premium/mulher-profissional-realizada-em-ia-generativa-de-escritorio_896194-2958.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: "Cerca de 2h",
            likes: 3
        },
        {
            id: 3,
            name: "Jessy Logan",
            photo: 'https://img.freepik.com/fotos-premium/feliz-jovem-profissional-com-ia-generativa_431161-16663.jpg',
            text: "Est aspernatur quis eos natus dicta et internos",
            timePosted: "Cerca de 2h",
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
                    commentData={comment}
                    onDeleteComment={() => {}}
                />
            ))}

            {comments.map((comment)=> (
                <Comments 
                    key={comment.id} 
                    commentData={ comment }
                    onDeleteComment={() => deleteComment(comment.id)}
                />
            ))}
        </div>
    )
}