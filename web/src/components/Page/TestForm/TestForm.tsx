import { TestFormButton } from "./TestFormButton";
import { TestFormInput } from "./TestFormInput";

export function TestForm(){
    return(
        <div className="flex sm:border-2 rounded-lg justify-between flex-col sm:w-96 w-full h-80 md:self-auto md:ml-8 mt-8 self-center bg-brand-500 bg-opacity-20 p-10">
            <TestFormInput/>
            <TestFormButton text="GERAR PDF DOS FEEDBACKS"/>
            <TestFormButton text="SWITCH THEME(temp)"/>       
        </div>
    );
}