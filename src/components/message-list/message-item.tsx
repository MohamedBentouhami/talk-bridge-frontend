import editMsg from "/src/assets/check.svg"
import "./message-list.css"

export default function MessageItem({ isMyMessage, message, profilePict, handleCorrectMsg }: any) {
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    
    const imgSrc = imgServer + profilePict;

    return (<div className={`message ${isMyMessage ? "sent" : "received"}`}>
        {!isMyMessage && <img
            id="correct-img"
            src={editMsg}
            alt="correct"
            onClick={() => handleCorrectMsg(message)}
        />}
        {
            !isMyMessage &&
            <img
                src={imgSrc}
                alt="profile-pict"
                className="avatar"
            />
        }
        <div className="message-content">
            {message.hasBeenCorrected ? (
                <>
                    <div className="original-message">{message.content}</div>
                    <div className={`corrected-message ${isMyMessage ? 'received' : 'sent'}`}>
                        {message.correctionProvided}
                    </div>
                </>
            ) : (
                <>{message.content}</>
            )}
        </div>
    </div>
    )
}