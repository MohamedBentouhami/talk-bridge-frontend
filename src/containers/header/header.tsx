import LangSelect from "../../components/lang-select/lang-select";
import NavBar from "../../components/nav-bar/nav-bar";

export default function Header() {
    return <header>
        <h1>Talk Bridge</h1>
        <NavBar />
        <LangSelect />
    </header>
}