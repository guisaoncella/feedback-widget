export function TestFormInput(){
    const isEmailValid = true;
    return(
        <>
            <label className="text-right">Email teste:
                <input id="inputEmail" type="email" className="sm:ml-6 ml-2 text-sm h-fit
                        border-zinc-400 bg-transparent rounded-md
                        focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1"></input>
                {!isEmailValid ? <p className="text-xs text-red-500">Email inválido</p> : <p className="text-xs opacity-0">fake</p>}
            </label>
           
        </>     
    );
}