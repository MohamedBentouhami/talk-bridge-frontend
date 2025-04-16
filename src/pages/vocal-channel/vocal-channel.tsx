import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { Mic, MicOff } from "lucide-react";
import { useState } from "react";
import "./vocal-channel.css";

const imgServer = import.meta.env.VITE_SERVER_IMAGES;

export default function VocalChannel() {
    const { id } = useParams();
    const [micOn, setMicOn] = useState(false);
    const voicerooms = useSelector((state: RootState) => state.voiceroom.voicerooms);
    const voiceroomInfo = voicerooms?.find(vr => vr.id === id);
    const navigate = useNavigate();


    if (!voiceroomInfo) return <div className="vc-loading">Loading...</div>;

    const handleLeave = () => {
        navigate("/voiceroom", {replace: true});
    }

    return (
        <div className="vc-page">
            <div className="vc-top">
                <h1 className="vc-room-title">{voiceroomInfo.title}</h1>
                <p className="vc-language">Language: {voiceroomInfo.languageUsed}</p>
            </div>
            <div className="vc-participant-grid">
                {voiceroomInfo.participants.map((participant, idx) => (
                    <div
                        key={participant.id}
                        className={`vc-participant ${participant.id === voiceroomInfo.hostId ? "host" : ""}`}
                    >
                        <div className="vc-participant-avatar">
                            <img
                                src={`${imgServer}${participant.profilePictUrl}`}
                                alt="Host Avatar"
                                className="vc-avatar-img"
                            />

                        </div>
                        <span className="vc-participant-label">
                            {`${idx + 1}. ${participant.firstName} `}
                        </span>
                    </div>
                ))}
            </div>

            <div className="vc-controls">
                <button
                    className={`vc-mic-button ${micOn ? "on" : "off"}`}
                    onClick={() => setMicOn(!micOn)}
                >
                    {micOn ? <Mic size={32} /> : <MicOff size={32} />}
                </button>

                <button className="vc-leave-button" onClick={handleLeave}>Leave</button>
            </div>
        </div>
    );
}
