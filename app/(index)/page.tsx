'use client'
import React, { useState, useEffect } from 'react';

import LoadingBar from './components/LoadingBar';
import SubmitThoughts from './components/SubmitThoughts';


export default function Home() {

    const [isWordSelected, setIsWordSeleceted] = useState(false)
    const [selectedWord, setSelectedWord] = useState('')

    const updateSelectedWord = (selectedWord: string) => {
        setSelectedWord(selectedWord)
        setIsWordSeleceted(true)
    }

    return (
            <div className="min-h-screen flex justify-center items-center flex-wrap">
                {!isWordSelected && <SubmitThoughts updateParentState={updateSelectedWord}/>}
                {isWordSelected && <LoadingBar selectedWord={selectedWord}/>}
            </div>
    )


}