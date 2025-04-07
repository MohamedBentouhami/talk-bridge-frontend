export default function adaptData(formData: any) {

    let correctData = {
        ...formData, nativeLanguage: formData.nativeLanguage.toLowerCase(),
        targetLanguage: formData.targetLanguage.toLowerCase(),
    }

    if (correctData.nativeLanguage === "gb") correctData.nativeLanguage = "en";
    if (correctData.targetLanguage === "gb") correctData.targetLanguage = "en";
    return correctData;

}