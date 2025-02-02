import { create } from 'zustand';

interface LanguageStoreProps {
  translation: 'uk' | 'it';
  setTranslation: (lang: 'uk' | 'it') => void;
  detectUserLanguage: () => Promise<void>;
}

const useLanguageStore = create<LanguageStoreProps>((set) => ({
  // Initialize translation from localStorage or default to 'uk'
  translation:
    typeof window !== 'undefined'
      ? (localStorage.getItem('selectedLanguage') as 'uk' | 'it') || 'uk'
      : 'uk',

  // Update translation in state and localStorage
  setTranslation: (lang: 'uk' | 'it') => {
    const validLang = lang === 'uk' || lang === 'it' ? lang : 'uk';
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
      const lang = data.country_code === 'IT' ? 'it' : 'uk';
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
