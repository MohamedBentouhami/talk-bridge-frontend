import { useTranslation } from "react-i18next";
import "./register-card.css";
import { useState } from "react";
import PersonalInfo from "../../components/personal-info/personal-info";
import LanguageInfo from "../../components/language-info/language-info";
import AccountInfo from "../../components/account-info/account-info";
import signup from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";
import storeUserToken from "../../utils/handle-local-storage/handle-local-storage";

export default function RegisterCard() {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        nativeLanguage: "",
        targetLanguage: "",
        email: "",
        password: "",
        confirmPassword: "",
        picture: undefined
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await signup(formData);
            storeUserToken(response);
            navigate("/dashboard");
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    const handleFileChange = (file: any) => {
        setFormData({ ...formData, picture: file })
    }

    return (
        <>
            <form className="register-form">
                <h1>{t('register.title')}</h1>
                {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />}
                {step === 2 && <LanguageInfo formData={formData} handleChange={handleChange} />}
                {step === 3 && <AccountInfo formData={formData} handleChange={handleChange} />}
            </form>
            {isLoading ? <Loader /> :
                <div className="form-navigation">
                    {step > 1 && (
                        <button type="button" className="back-btn" onClick={prevStep}>
                            {t('register.back')}
                        </button>
                    )}
                    {step < 3 && (
                        <button type="button" className="next-btn" onClick={nextStep}>
                            {t('register.next')}
                        </button>
                    )}
                    {step === 3 && (
                        <button type="submit" className="register-btn" onClick={handleSubmitForm}>
                            {t('register.button')}
                        </button>
                    )}
                </div>
            }
        </>
    );
}
