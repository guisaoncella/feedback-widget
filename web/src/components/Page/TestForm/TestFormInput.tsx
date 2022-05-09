import { useState } from "react";

export function TestFormInput(){
    const emailValidation = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [email, setEmail] = useState("");

    function handleEmailInput(email: string){
        setIsEmailValid(false);
        setEmail(email); 
        if (emailValidation.exec(email)){
            setIsEmailValid(true);    
        }   
    }

    return(
        <>
            <label className="text-right">Email teste:
                <input id="inputEmail" type="email" className="sm:ml-6 ml-2 text-sm h-fit
                        border-zinc-400 bg-transparent rounded-md
                        focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1"
                        
                onChange={(e) => handleEmailInput(e.target.value)}
                />

                {!isEmailValid ? <p className="text-xs text-red-500">Email inválido</p> : <p className="text-xs opacity-0">fake</p>}
            </label>
        </>     
    );
}