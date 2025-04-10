import { useTranslation } from "react-i18next"
import ImageUpload from "../image-upload/image-upload";
import { registerFormProps } from "../../@types/register-form-props";

export default function PersonalInfo({ formData, handleChange , handleFileChange}: registerFormProps) {
    const { t } = useTranslation();
    return <>
        <ImageUpload handleFileChange={handleFileChange}></ImageUpload>
        <div>
            <label htmlFor="input-first-name">{t('register.firstName')}</label>
            <input type="text" id="input-first-name" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="input-last-name">{t('register.lastName')}</label>
            <input type="text" id="input-last-name" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="input-birthday">{t('register.birthday')}</label>
            <input type="date" id="input-birthday" name="birthday" value={formData.birthday} onChange={handleChange}/>
        </div>
    </>
}