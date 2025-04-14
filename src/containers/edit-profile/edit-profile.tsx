import useSWR, { mutate } from "swr";
import { getUserInfo, updateUser } from "../../services/user.service";
import Loader from "../../components/loader/loader";
import "./edit-profile.css";
import { useEffect, useState } from "react";
import { LANGUAGES_LABELS } from "../../constants/lang.constant";
import ImageUpload from "../../components/image-upload/image-upload";
import { ToastContainer, toast } from 'react-toastify';



export default function EditProfile() {
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const id = localStorage.getItem("id");
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, getUserInfo);
    const [isUpdating, setIsUpdating] = useState(false);


    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        nativeLg: "",
        targetLg: "",
        bio: "",
        picture: ""
    });

    const setData = () => {
        setForm({
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            nativeLg: data?.nativeLanguage.toUpperCase() || "",
            targetLg: data?.targetLanguage.toUpperCase() || "",
            bio: data?.bio || "",
            picture: `${imgServer}${data?.profilePict}`
        })
    }

    useEffect(() => {
        setData();
    }, [data])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (file: any) => {
        setForm({ ...form, picture: file })
    }

    const handleUpdateProfile = async () => {
        setIsUpdating(true);
        try {
            await updateUser(form);
            mutate(`/api/user/${id}`);
            toast.success("Profile updated successfully!", {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsUpdating(false);
        }

    }

    const handleCancelProfile = () => {
        setData();
    }

    return isLoading ? (
        <Loader />
    ) : (
        <div className="edit-profile-container">
            <ToastContainer></ToastContainer>
            <div className="edit-profile-sidebar">
                <ImageUpload handleFileChange={handleFileChange} previousPicture={`${imgServer}${data?.profilePict}`} ></ImageUpload>
                <h3>{data?.firstName} {data?.lastName}</h3>
                <ul className="sidebar-menu">
                    <li className="active">Account</li>
                    <li>Password</li>
                    <li>Application</li>
                </ul>
            </div>

            <div className="edit-profile-form">
                <h2>Account Settings</h2>

                <div className="form-columns">
                    <div className="form-left">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                        <label>Native Language</label>
                        <select name="nativeLg" value={form.nativeLg} onChange={handleChange} className="lg-select">
                            {Object.entries(LANGUAGES_LABELS).map(([label, value]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-right">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
                        <label>Target Language</label>
                        <select name="targetLg" value={form.targetLg} onChange={handleChange} className="lg-select">
                            {Object.entries(LANGUAGES_LABELS).map(([label, value]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Bio</label>
                    <textarea name="bio" value={form.bio} onChange={handleChange} />
                </div>

                <div className="form-actions">
                    <button className="btn-update" onClick={handleUpdateProfile}>Update</button>
                    <button className="btn-cancel" onClick={handleCancelProfile}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
