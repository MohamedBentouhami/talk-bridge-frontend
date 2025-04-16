import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { LANGUAGES_LABELS } from "../../constants/lang.constant";
import "./form-voiceroom.css"
import { createVoiceRoom } from "../../services/voiceroom.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormVoiceroom({ open, onOpenChange }: any) {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [lg, setLg] = useState(LANGUAGES_LABELS.English);

   

    const handleCreationVr = async () => {
        const vr = await createVoiceRoom(title, lg.toLowerCase())
        navigate(`/voiceroom/${vr.id}`)


    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogPortal>
                <DialogOverlay className="vr-form-overlay" />
                <DialogContent className="vr-form-content" aria-describedby="vr-form-description">
                    <DialogTitle className="vr-form-title">Create a room</DialogTitle>
                    <DialogDescription className="vr-form-description">
                        Set up your new voice room with a title and language
                    </DialogDescription>

                    <fieldset className="vr-fieldset">
                        <label className="vr-label" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="vr-input"
                            id="title"
                            value={title}
                            placeholder="Enter room title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="vr-fieldset">
                        <label className="vr-label" htmlFor="language">
                            Language
                        </label>
                        <select
                            id="language"
                            className="vr-select"
                            onChange={(e) => { setLg(e.target.value) }}>
                            {Object.entries(LANGUAGES_LABELS).map(([label, code]) => (
                                <option key={code} value={code}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
                        <DialogClose asChild>
                            <button className="vr-button vr-button-primary" onClick={handleCreationVr}>
                                Start Voiceroom
                            </button>
                        </DialogClose>
                        <DialogClose asChild>
                            <button className="vr-button" onClick={() => onOpenChange(false)}>
                                Cancel
                            </button>
                        </DialogClose>
                    </div>

                    <DialogClose asChild>
                        <button className="vr-close-button" aria-label="Close">
                            <X size={16} />
                        </button>
                    </DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}