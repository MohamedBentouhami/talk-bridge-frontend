export type registerFormProps = {
    formData: formData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleFileChange?: (file: File) => void
}

export type formData ={
    firstName: string,
    lastName: string,
    birthday: string,
    nativeLanguage: string,
    targetLanguage: string,
    email: string,
    password: string,
    confirmPassword: string
    picture: any
}