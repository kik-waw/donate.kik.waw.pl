import {defaultLang, locales} from "../config";

export default function useNavigatorLanguage    (): string {
    if (!window?.navigator?.language || !window?.navigator?.languages) {
        return defaultLang;
    }
    const { navigator } = window;

    const browserLang = (navigator.languages?.[0] || navigator?.language)
        .split("-")[0]
        .toLowerCase();

    return locales.includes(browserLang) ? browserLang : defaultLang;

};
