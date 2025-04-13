import { useState } from "react";
import { correctText, rephraseText } from "../../services/languages-tools.service";
import Loader from "../../components/loader/loader";
import { LABEL_LANGUAGES } from "../../constants/lang.constant";
import "./correction-ia.css"

export default function CorrectionIA() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [lg, setLg] = useState(LABEL_LANGUAGES[0])

    const handleRephrase = async () => {
        setIsLoading(true);
        const answer = await rephraseText(text, lg);
        setOutput(answer);
        setIsLoading(false);
    }

    const handleCorrection = async () => {
        setIsLoading(true);
        const answer = await correctText(text, lg);
        setOutput(answer);
        setIsLoading(false);
        console.log(lg)
    }

    return <div className="correction-ia">
        <h3 className="title">IA correction</h3>
        <p>Perfect your texts with our cutting-edge AI, enhanced by our linguistic expertise.</p>
        <select onChange={(e) => { setLg(e.target.value) }} value={lg}>
            {LABEL_LANGUAGES.map((languageLabel) => (
                <option key={languageLabel} value={languageLabel}>
                    {languageLabel}
                </option>
            ))}
        </select>
        <textarea placeholder="Enter or paste text here" className="input-area" value={text}
            onChange={(e) => setText(e.target.value)}>
        </textarea>
        <div className="actions">

            <button className="btn-action" onClick={handleCorrection} disabled={isLoading}>Grammar check</button>
            <button className="btn-action" onClick={handleRephrase} disabled={isLoading}>Rephrase</button>
        </div>

        {isLoading ? <div className="div-loader">
            <Loader color="#523d68" />
        </div>
            : output && <div className="output-section">
                <h4>Result</h4>
                <p className="output-text">{output}</p>
            </div>
        }

    </div>
}