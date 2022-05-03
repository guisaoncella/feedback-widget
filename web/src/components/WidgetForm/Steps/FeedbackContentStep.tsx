import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
}

export function FeedbackContentStep({feedbackType, onRestartFeedback}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>
                <button 
                    type="button" 
                    onClick={onRestartFeedback}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                        
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>

            <form className="my-4 w-full">
                <textarea
                    className="min-w-[304px] min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-100
                        border-zinc-600 bg-transparent rounded-md resize-none
                        focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1
                        scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"

                    placeholder="Conte-nos com detalhes o que está acontecendo"
                />
            </form>
        </>
    );
}