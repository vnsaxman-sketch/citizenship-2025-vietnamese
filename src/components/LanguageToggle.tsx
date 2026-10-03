export type DisplayLanguage = "both" | "en" | "vi";

interface LanguageToggleProps {
  language: DisplayLanguage;
  onChange: (language: DisplayLanguage) => void;
}

export default function LanguageToggle({
  language,
  onChange,
}: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label="Language display">
      <button
        className={language === "both" ? "active" : ""}
        onClick={() => onChange("both")}
      >
        Both
      </button>
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => onChange("en")}
      >
        English
      </button>
      <button
        className={language === "vi" ? "active" : ""}
        onClick={() => onChange("vi")}
      >
        Tiếng Việt
      </button>
    </div>
  );
}

