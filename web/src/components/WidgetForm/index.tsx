import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thinkImageUrl from "../../assets/think.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG:{
        title: "Problema" ,   
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA:{
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER:{
        title: "Outro",
        image: {
            source: thinkImageUrl,
            alt: "Imagem de um emoji pensando"
        }      
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
                        w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />    
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-2" target="_blank" rel="noreferrer" href="https://github.com/guisaoncella">
                    guisaoncella
                </a> ✨ 
                <a className="underline underline-offset-2" target="_blank" rel="noreferrer" href="https://rocketseat.com.br">
                    Rocketseat NLW
                </a>
            </footer>

        </div>
    );
}