export function WidgetForm(){
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
                        w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
            </header>

            <p>Formulário do Widget</p>

            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-2" target="_blank" rel="noreferrer" href="https://github.com/guisaoncella">guisaoncella</a> ✨ 
                <a className="underline underline-offset-2" target="_blank" rel="noreferrer" href="https://rocketseat.com.br">Rocketseat NLW</a>
            </footer>

        </div>
    );
}