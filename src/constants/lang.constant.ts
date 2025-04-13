export const LANGUAGES_APP = { GB: "English", FR: "Français", BE: "Nederlands" }
export const LANGUAGES_SPOKEN = {
  GB: "English",
  FR: "Français",
  ES: "Español",
  DE: "Deutsch",
  IT: "Italiano",
  NL: "Nederlands",
  PT: "Português",
  RU: "Русский",
  SA: "العربية"
};

export const COUNTRIES = [
  "GB",
  "FR",
  "ES",
  "DE",
  "IT",
  "NL",
  "PT",
  "RU",
  "SA"
]
type LanguageLabels = {
  [key: string]: {
    [key: string]: string;
  };
};

export const languages: LanguageLabels = {
  en: { en: "English", fr: "Anglais" },
  fr: { en: "French", fr: "Français" },
  es: { en: "Spanish", fr: "Espagnol" },
  de: { en: "German", fr: "Allemand" },
  it: { en: "Italian", fr: "Italien" },
  nl: { en: "Dutch", fr: "Néerlandais" },
  pt: { en: "Portuguese", fr: "Portugais" },
  ru: { en: "Russian", fr: "Russe" },
  zh: { en: "Chinese", fr: "Chinois" },
  ar: { en: "Arabic", fr: "Arabe" },
};

export const LABEL_LANGUAGES = ["English", "French", "Spanish", "German", "Italian", "Dutch", "Portuguese", "Russian", "Chinese", "Arabic"];