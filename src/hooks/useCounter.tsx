import { useState } from "react";

export default function useCounter() {
    const [counter, setCounter] = useState(0);
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