import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { ToastContainer, toast } from 'react-toastify';
import { getUserInfo, updateUser } from "../../services/user.service";
import Loader from "../../components/loader/loader";
import ImageUpload from "../../components/image-upload/image-upload";
import EditProfileForm from "../../components/edit-profile-form/edit-profile-form";
import AppSettings from "../../components/app-settings/app-settings";
import { useTranslation } from "react-i18next";

import "./edit-profile.css";

export default function EditProfile() {
    const { t } = useTranslation();
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const id = localStorage.getItem("id");
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, getUserInfo);
    const [isUpdating, setIsUpdating] = useState(false);
    const [tab, setSelected] = useState("account");

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
        });
    };

    useEffect(() => {
        setData();
    }, [data]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (file: any) => {
        setForm({ ...form, picture: file });
    };

    const handleUpdateProfile = async () => {
        setIsUpdating(true);
        try {
            await updateUser(form);
            await mutate(`/api/user/${id}`);
            toast.success(t("profile.update.success"), {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error(t("profile.update.error"));
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancelProfile = () => {
        setData();
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="edit-profile-container">
            <ToastContainer />
            <div className="edit-profile-sidebar">
                <ImageUpload
                    handleFileChange={handleFileChange}
                    previousPicture={`${imgServer}${data?.profilePict}`}
                />
                <h3>{data?.firstName} {data?.lastName}</h3>
                <ul className="sidebar-menu">
                    <li className={`${tab === "account" && 'active'}`} onClick={() => setSelected("account")}>
                        {t("profile.tabs.account")}
                    </li>
                    <li className={`${tab === "app" && 'active'}`} onClick={() => setSelected("app")}>
                        {t("profile.tabs.app")}
                    </li>
                    <li className={`${tab === "password" && 'active'}`} onClick={() => setSelected("password")}>
                        {t("profile.tabs.password")}
                    </li>
                </ul>
            </div>

            {tab === "account" && (
                <EditProfileForm
                    form={form}
                    handleChange={handleChange}
                    handleUpdateProfile={handleUpdateProfile}
                    handleCancelProfile={handleCancelProfile}
                    isUpdating={isUpdating}
                />
            )}

            {tab === "app" && <AppSettings />}
        </div>
    );
}
