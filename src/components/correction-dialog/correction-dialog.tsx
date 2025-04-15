import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import "./correction-dialog.css";
import { Message } from "../../@types/message";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import addCorrection from "../../services/friend.service";
import { correctMessage } from "../../store/messages/message.action";

type DialogDemoProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    messageToCorrect: Message;
};

export function DialogDemo({ open, onOpenChange, messageToCorrect }: DialogDemoProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [msg, setMsg] = useState(messageToCorrect.content)
    const handleCorrection = async () => {
        await addCorrection(messageToCorrect.id, msg);
        dispatch(correctMessage(messageToCorrect.id, msg, messageToCorrect.senderId!));
        onOpenChange(false)
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogPortal>
                <DialogOverlay className="dialog-overlay" />
                <DialogContent className="dialog-content">
                    <DialogTitle className="dialog-title">Add a message correction</DialogTitle>
                    <DialogDescription hidden></DialogDescription>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="message">
                            Message
                        </label>
                        <input className="Input" id="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    </fieldset>
                    <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
                        <DialogClose asChild>
                            <button className="Button green" onClick={handleCorrection}>Save changes</button>
                        </DialogClose>
                    </div>
                    <DialogClose asChild>
                        <button className="IconButton" aria-label="Close"
                            onClick={() => onOpenChange(false)}>
                            <X color="#ff0000" onClick={() => onOpenChange(false)} />
                        </button>
                    </DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}

export default DialogDemo;
