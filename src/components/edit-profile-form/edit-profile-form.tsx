import { LANGUAGES_LABELS } from "../../constants/lang.constant";
import "./edit-profile-form.css"

export default function EditProfileForm({ form, handleChange, handleUpdateProfile, handleCancelProfile, isUpdating }: any) {
    return <div className="edit-profile-form">
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
            <button className="btn-update" onClick={handleUpdateProfile} disabled={isUpdating}>  {isUpdating ? "Updating..." : "Update"}
            </button>
            <button className="btn-cancel" onClick={handleCancelProfile}>Cancel</button>
        </div>
    </div>
}