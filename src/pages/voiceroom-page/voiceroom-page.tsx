import { useState } from "react";
import VoiceroomContainer from "../../containers/voiceroom-container/voiceroom-container";
import FormVoiceroom from "../../components/form-voiceroom/form-voiceroom";
import { Mic } from "lucide-react";
import './voiceroom-page.css'

export default function VoiceroomPage() {

    const [open, setOpenModal] = useState(false);


    return <div className="voiceroom-page">
        <button className="create-vr-btn" onClick={() => setOpenModal(true)}>Create a voiceroom <Mic /></button>
        {
            open && <FormVoiceroom
                open={open}
                onOpenChange={setOpenModal}
            />
        }
        <VoiceroomContainer></VoiceroomContainer></div>
}