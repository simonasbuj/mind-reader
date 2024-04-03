import React, { useState, useEffect } from 'react';

interface LoadingBarProps {
    selectedWord: string
}


export default function LoadingBar({ selectedWord }: LoadingBarProps) {
    const [progress, setProgress] = useState(1);
    const stepsToReadMind = ["Analyzing brainwaves...", "Scanning Memories...", "Calculating probabilities...", "Decoding thoughts..."]

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
            if (prevProgress < 100) {
                return prevProgress + 1;
            } else {
                clearInterval(interval);
                return 100;
            }
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <p className='text-black text-lg'>
                {stepsToReadMind[Math.floor(progress / 25)]} 
                {progress === 100 && 
                    (   <>
                        You are thinking about: <span className="font-bold">{selectedWord}</span>
                        </>
                    )
                }
            </p>
            <div className="w-[1000px] bg-gray-300 h-10 rounded-xl overflow-hidden mt-4">  
                <div className="bg-gradient-to-r from-indigo-500 from-40% via-purple-500 via-60% to-pink-500 to-90% h-full transition-width duration-50" style={{ width: `${progress}%`, transition: 'width 0.08s' }}></div>
            </div>
        </div>


    )
}