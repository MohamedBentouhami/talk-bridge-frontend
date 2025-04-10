import { useRef, useState } from "react"
import defaultImage from "/src/assets/user-round.webp"
import editImage from "/src/assets/camera.png"

import "./image-upload.css"

export default function ImageUpload({ handleFileChange }: any) {
    const [profilePict, setProfilePict] = useState(defaultImage);
    const fileUploadRef = useRef<HTMLInputElement>(null);

    const handleImgUpload = (e: React.MouseEvent) => {
        e.preventDefault();
        fileUploadRef.current?.click();
    }

    const uploadImageDisplay = () => {
        const inputImg = fileUploadRef.current;
        if (inputImg?.files?.[0]) {
            const uploadImage = inputImg.files[0];
            const cachedURL = URL.createObjectURL(uploadImage);
            setProfilePict(cachedURL);
            handleFileChange?.(uploadImage);
        }
    }

    return <div className="image-picker">
        <button className="img-btn" onClick={handleImgUpload}>
            <img src={profilePict} className="profile-img" />
            <img src={editImage} className="edit-icon" ></img>
        </button>
        <input type="file" id="image-picker" ref={fileUploadRef} onChange={uploadImageDisplay} accept="image/*" hidden></input>
    </div>
}