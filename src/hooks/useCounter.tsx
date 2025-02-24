import { useState } from "react";

export default function useCounter(initialValue: number = 0) {
    const [counter, setCounter] = useState(initialValue);
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        if (isLiked) {
            setCounter((counter) => counter - 1);
        } else {
            setCounter((counter) => counter + 1);
        }
        setIsLiked((isLiked) => !isLiked);
    }

    return { counter, isLiked, toggleLike }
}