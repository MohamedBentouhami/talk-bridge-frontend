import LangSelect from "../../components/lang-select/lang-select";
import "./app-header.css"

export default function AppHeader() {
    return <header className="app-header">
        <h1>Talk Bridge</h1>
        <LangSelect></LangSelect>
    </header>
}