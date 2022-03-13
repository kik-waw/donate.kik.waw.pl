import React from "react";

export const TranslationContext = React.createContext((t: string): string => (t));
export const useTranslation = () => {
    const t = React.useContext(TranslationContext);
    return {t};
}
