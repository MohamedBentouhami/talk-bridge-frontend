import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";
import "./toggle-mode.css";

export default function ToggleMode() {

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e: any) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }

    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} className="sun" alt="Light mode" />
                <img src={Moon} className="moon" alt="Dark mode" />
            </label>
        </div>
    );
}