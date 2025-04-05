import { useTranslation } from "react-i18next"
import { registerFormProps } from "../../@types/register-form-props";

export default function AccountInfo({ formData, handleChange }: registerFormProps) {
    const { t } = useTranslation();
    return <>
        <div>
            <label htmlFor="input-email">{t('register.email')}</label>
            <input type="email" id="input-email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="input-password">{t('register.password')}</label>
            <input type="password" id="input-password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="input-password2">{t('register.confirmPassword')}</label>
            <input type="password" id="input-password2" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
    </>
}