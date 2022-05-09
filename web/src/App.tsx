import { PageHeader } from "./components/Page/PageHeader";
import { TestForm } from "./components/Page/TestForm/TestForm";
import { Widget } from "./components/Widget";

export function App() {
    return(
        <div className="flex flex-col">
            <PageHeader/>
            <TestForm/>
            <Widget/>
        </div>
    );    
}
