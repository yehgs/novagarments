import { create } from 'zustand';

interface LanguageStoreProps {
  translation: 'uk' | 'it' | 'nl';
  setTranslation: (lang: 'uk' | 'it' | 'nl') => void;
  detectUserLanguage: () => Promise<void>;
}

const useLanguageStore = create<LanguageStoreProps>((set) => ({
  // Initialize translation from localStorage or default to 'uk'
  translation:
    typeof window !== 'undefined'
      ? (localStorage.getItem('selectedLanguage') as 'uk' | 'it' | 'nl') || 'uk'
      : 'uk',

  // Update translation in state and localStorage
  setTranslation: (lang: 'uk' | 'it' | 'nl') => {
    const validLang =
      lang === 'uk' || lang === 'it' || lang === 'nl' ? lang : 'uk';
    localStorage.setItem('selectedLanguage', validLang);
    set({ translation: validLang });
  },

  // Detect user language only if no language is already set in localStorage
  detectUserLanguage: async () => {
    try {
      // Skip detection if a language is already set in localStorage
      if (localStorage.getItem('selectedLanguage')) {
        return;
      }

      const res = await fetch('https://geolocation-db.com/json/');
      const data = await res.json();
      let lang: 'uk' | 'it' | 'nl' = 'uk';

      if (data.country_code === 'IT') {
        lang = 'it';
      } else if (data.country_code === 'NL') {
        lang = 'nl';
      } else {
        lang = 'uk';
      }

      localStorage.setItem('selectedLanguage', lang);
      set({ translation: lang });
    } catch (error) {
      console.error('Error fetching user location:', error);
      localStorage.setItem('selectedLanguage', 'uk');
      set({ translation: 'uk' });
    }
  },
}));

export default useLanguageStore;
