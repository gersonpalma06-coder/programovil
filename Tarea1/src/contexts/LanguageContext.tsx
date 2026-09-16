import { I18n } from 'i18n-js/typings/I18n';
import React from 'react';
import { createContext, useContext, useState } from 'react';
import { translations } from '../utils/translations';

type Language = 'es' | 'en';

type LanguageContextType = {
    language: Language;
    changeLanguage: (lng: Language) => void;
    clearLanguage: () => {};
}

//1 definicion de diccionario de traducciones

//2 crear la instancia del i18n con el diccionario cargado
const i18n = new I18n(translations);

//3 Definir propiedades del contexto, habilitar el fallback
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

const languageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');
    const changeLanguage = (lng: Language) => {
        setLanguage(lng);
        //asignacion de idioma activo
        i18n.locale = lng;
    }
    const clearLanguage = () => {
        return "";
    }

    return (
        <languageContext.Provider value={{ language, changeLanguage, clearLanguage }}>
            {children}
        </languageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(languageContext);
    if (!context) 
        throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
    return context;
}