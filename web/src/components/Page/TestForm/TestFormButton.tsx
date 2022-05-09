interface TestFormButtonProps {
    text: string;
}

export function TestFormButton({text}: TestFormButtonProps){
    return(
        <>
            <button
                type="button"
                className="max-w-[200px] w-full self-center p-2 bg-brand-500 rounded-md border-transparent justify-center text-sm 
                            hover:bg-brand-300 hover:ring-2 hover:ring-brand-500 hover:ring-offset-2 hover:ring-offset-zinc-900
                            focus:outline-none focus:ring-2 focus:ring-brand-500 
                            focus:ring-offset-2 focus:ring-offset-zinc-900
                            disabled:opacity-50 disabled:hover:bg-brand-500 transition-all"
            >     
                {text}
            </button>
        </>     
    );
}