import { useTranslation } from "react-i18next";
import LangSelect from "../lang-select/lang-select";
import ToggleMode from "../toggle-mode/toggle-mode";
import "./app-settings.css";
import { useState } from "react";

export default function AppSettings() {
    const {t} = useTranslation();
    const [notifications, setNotifications] = useState(true);

    const handleNotificationToggle = () => {
    setNotifications(!notifications)
    if (!notifications) {
        if (Notification.permission === "granted") {
            setNotifications(true);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    setNotifications(true);
                }
            });
        }
    } else {
        setNotifications(false);
    }
};


    return (
        <div className={`app-settings`}>
            <h2>Application Settings</h2>

            <div className="setting-toggle">
                <label>Interface Language
                <LangSelect />
                </label>
            </div>

            <div className="setting-toggle">
                <label>
                    <span>Enable Notifications</span>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={() => handleNotificationToggle()}
                        hidden
                    />
                    <span className="toggle-switch"></span>
                </label>
            </div>

            <div className="setting-toggle">
                <label>
                    <span>App Appearance</span>
                    <ToggleMode></ToggleMode>
                </label>
            </div>
        </div>
    );
}