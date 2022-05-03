import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
}

export function FeedbackContentStep({feedbackType, onRestartFeedback}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState("");

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        });
        console.log(screenshot);
    }

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

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-100
                        border-zinc-600 bg-transparent rounded-md resize-none
                        focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1
                        scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"

                    placeholder="Conte-nos com detalhes o que está acontecendo"
                    onChange={(e) => setComment(e.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        disabled={!comment}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm 
                            hover:bg-brand-300 hover:ring-2 hover:ring-brand-500 hover:ring-offset-2 hover:ring-offset-zinc-900
                            focus:outline-none focus:ring-2 focus:ring-brand-500 
                            focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors
                            disabled:opacity-50 disabled:hover:bg-brand-500"
                    >

                    Enviar Feedback        
                    </button>
                </footer>
            </form>
        </>
    );
}