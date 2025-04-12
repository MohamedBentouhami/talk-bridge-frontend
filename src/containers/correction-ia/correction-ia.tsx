import { pronunciationLanguages } from "../../utils/common/tools";

export default function CorrectionIA() {

    return <div className="correction-ia">
        <h3>Perfect your texts with our cutting-edge AI, enhanced by our linguistic expertise.</h3>
        <select onChange={() => { }}>
            {Array.from(pronunciationLanguages).map(([value, key]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </select>
        <textarea placeholder="Entez or paste text here">

        </textarea>
        <button>Grammar check</button>
        <button>Rephrase</button>

    </div>
}