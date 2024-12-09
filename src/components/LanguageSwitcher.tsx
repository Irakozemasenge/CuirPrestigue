import React from "react";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const addGoogleTranslate = () => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,fr,sw",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  };

  React.useEffect(() => {
    addGoogleTranslate();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSwitcher;
