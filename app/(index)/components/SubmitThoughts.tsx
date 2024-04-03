import { useState } from "react";
import clsx from "clsx";


interface SubmitThoughtsProps {
    updateParentState: (newValue: string) => void;
}

const MINIMUM_WORD_LENGTH = 3

export default function SubmitThoughts ({ updateParentState }: SubmitThoughtsProps) {

    const [selectedWord, setSelectedWord] = useState('')

    const handleClick = () => {
        if (selectedWord.length >= MINIMUM_WORD_LENGTH) {
            updateParentState(selectedWord) 
        }
    }

    return (
        <>
            <div className="flex flex-col items-center w-1/3">
                <input
                    className="w-full text-black py-4 px-2 focus:outline-none rounded-xl"
                    type="text"
                    placeholder="What are you thinking about?"
                    onChange={(e) => setSelectedWord(e.target.value)}
                />
                <button 
                    className={clsx(
                        `mt-4 px-12 py-4 rounded-xl text-white font-bold bg-pink-400 hover:bg-pink-500 duration-300`,
                        selectedWord.length >= MINIMUM_WORD_LENGTH ? "opacity-100" : "opacity-0 translate-y-5 cursor-default"
                    )}
                    onClick={handleClick}
                >
                Read my mind
                </button>
                
            </div>
        </>
    )
}