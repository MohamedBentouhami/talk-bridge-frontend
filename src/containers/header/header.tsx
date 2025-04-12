import NavBar from "../../components/nav-bar/nav-bar";
import TalkBridge from "/src/assets/TalkBridge.png"
import "./header.css"

export default function Header() {
    return <header className={"header"}>
        <img src={TalkBridge}></img>
        <NavBar />

    </header>
}