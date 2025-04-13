import LangSelect from "../../components/lang-select/lang-select";
import TalkBridge from "/src/assets/talk-bridge.png"
import "./app-header.css"

export default function AppHeader() {
    return <header className="app-header">
                <img src={TalkBridge}></img>

        <LangSelect></LangSelect>
    </header>
}