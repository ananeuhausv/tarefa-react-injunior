import { useState } from 'react';
import styles from './styles.module.css'
import CommentButton from '../CommentButton/CommentButton';

interface TextareaCardPostProps {
    onAddComment: (comment: string) => void;
}

export default function TextareaCardPost({ onAddComment }: TextareaCardPostProps) {
    const[text, setText] = useState("");

    const handleSubmit = () => {
        if(text.trim() === "") return
        onAddComment(text);
        setText("");
    }
    return (
        <div className={styles.feedback}>
            <h3>Deixe seu feedback</h3>
            <textarea 
            placeholder="Escreva um comentário..."
            value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
            <CommentButton onClick={handleSubmit}/>
        </div> 
    )
}