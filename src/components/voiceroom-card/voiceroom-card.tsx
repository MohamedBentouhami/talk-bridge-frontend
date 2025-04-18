import { useNavigate } from "react-router-dom";
import { Voiceroom } from "../../@types/voiceroom";
import "./voiceroom-card.css";
import { joinVoiceroom } from "../../services/voiceroom.service";

type VoiceroomCardProps = {
  voiceroom: Voiceroom;
};

const imgServer = import.meta.env.VITE_SERVER_IMAGES;


export default function VoiceroomCard({ voiceroom }: VoiceroomCardProps) {
  let navigate = useNavigate();

  const handleVrEntering = async () => {
    await joinVoiceroom(voiceroom.id);
    navigate(`/voiceroom/${voiceroom.id}`)
  }

  return (
    <div className={`vr-card ${!voiceroom.isActive ? "vr-non-active" : ""}`} onClick={voiceroom.isActive ? handleVrEntering : undefined}
    >
      <span className="vr-language-badge">{voiceroom.languageUsed.toUpperCase()}</span>
      <h2 className="vr-title">{voiceroom.title}</h2>
      <div className="vr-host">
        <img
          className="vr-host-avatar"
          src={`${imgServer}${voiceroom.hostPictUrl}`}
          alt={`${voiceroom.hostName}'s profile`}
        />
        <span className="vr-host-name">{voiceroom.hostName}</span>
      </div>
      {voiceroom.isActive && <div className="vr-participants">
        {voiceroom.participants.length} participant{voiceroom.participants.length !== 1 ? 's' : ''}
      </div>
      }
    </div>
  );
}