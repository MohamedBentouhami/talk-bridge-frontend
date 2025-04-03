import { useTranslation } from "react-i18next";
import "./register-card.css";
import { useState } from "react";
import PersonalInfo from "../../components/personal-info/personal-info";
import LanguageInfo from "../../components/language-info/language-info";
import AccountInfo from "../../components/account-info/account-info";

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
        confirmPassword: ""
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form className="register-form">
                <h1>{t('register.title')}</h1>
                {step === 1 && <PersonalInfo />}
                {step === 2 && <LanguageInfo />}
                {step === 3 && <AccountInfo />}
            </form>
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
                    <button type="submit" className="register-btn">
                        {t('register.button')}
                    </button>
                )}
            </div>
        </>
    );
}
