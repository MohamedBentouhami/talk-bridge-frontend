import { useState } from "react";
import "./translation-container.css";
import { getTranslation } from "../../services/languages-tools.service";
import { LANGUAGES_LABELS } from "../../constants/lang.constant";

export default function TranslationContainer() {
    const [text, setText] = useState("");
    const [textTranslated, setTextTranslated] = useState("");

    const [lg, setLg] = useState("EN");
    const [lgToTranslate, setLgToTranslate] = useState("EN");

    const handleTranslation = async () => {
        const result = await getTranslation(text, lg, lgToTranslate)
        setTextTranslated(result ?? "No translation");

    }

    return (
        <div className="translation-container">
            <h3 className="title">Translation</h3>
            <div className="translation-inputs">
                <div className="input-block">
                    <label htmlFor="source-lang">From</label>
                    <select id="source-lang" className="language-select" value={lg} onChange={(e) => setLg(e.target.value)}>
                        {Object.entries(LANGUAGES_LABELS).map(([label, value]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <textarea className="text-area" placeholder="Enter text..." value={text} onChange={(e) => {
                        if (textTranslated !== "") setTextTranslated("")
                        setText(e.target.value)

                    }}
                    ></textarea>
                </div>

                <div className="input-block">
                    <label htmlFor="target-lang">To</label>
                    <select id="target-lang" className="language-select" value={lgToTranslate}
                        onChange={(e) => setLgToTranslate(e.target.value)}>
                        {Object.entries(LANGUAGES_LABELS).map(([label, value]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <textarea className="text-area" placeholder="Translation will appear here..." value={textTranslated} readOnly></textarea>
                </div>

            </div>
            <button className="translate-button" onClick={handleTranslation}>Translate</button>
        </div>
    );
}
