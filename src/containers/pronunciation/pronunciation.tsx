import { useState } from "react";
import { getPronunciation } from "../../services/languages-tools.service";
import { AudioLines, Play, Trash2 } from "lucide-react";
import Loader from "../../components/loader/loader";
import "./pronunciation.css"
import { pronunciationLanguages } from "../../utils/common/tools";

export default function PronunciationContainer() {
    const [word, setWord] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [code, setCode] = useState("22");

    const handleListen = async () => {
        if (!word.trim()) return;
        setLoading(true);
        setError("");
        setAudioUrl(null);

        try {
            const audio = await getPronunciation(word, code);
            if (audio) {
                setAudioUrl(audio);
                const audioPlayer = new Audio(audio);
                audioPlayer.play();
            } else {
                setError("No pronunciation found.");
            }
        } catch (err) {
            console.error(err);
            setError("Error fetching pronunciation.");
        } finally {
            setLoading(false);
        }
    };
    const handleLgChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCode(e.target.value)
    }

    return (
        <div className="pronunciation-container">
            <h3 className="title">Pronunciation</h3>
            <select onChange={handleLgChange}>
                {Array.from(pronunciationLanguages).map(([value, key]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </select>
            <textarea
                placeholder="Type a word/sentence"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                rows={2}
                className="input-area"
            ></textarea>
            <br />
            <div className="actions">

                {loading ? <Loader color="black"></Loader> : <button className="play-button"><Play onClick={handleListen} size={50}/> </button>}
                {error && <p>{error}</p>}
                {word && <Trash2 color="black" size={50} onClick={()=>setWord("")}/>}
            </div>
        </div>
    );
}
