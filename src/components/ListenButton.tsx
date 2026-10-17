import { useEffect, useState } from "react";

interface ListenButtonProps {
  text: string;
  lang: "en-US" | "vi-VN";
  label: string;
  rate?: number;
}

export default function ListenButton({
  text,
  lang,
  label,
  rate = 0.85,
}: ListenButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [supported]);

  function speak() {
    if (!supported || !text.trim()) {
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = lang;
    speech.rate = rate;
    speech.pitch = 1;
    speech.volume = 1;

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }

  if (!supported) {
    return (
      <p className="audio-not-supported">
        Audio is unavailable. / Âm thanh không khả dụng.
      </p>
    );
  }

  return (
    <button
      type="button"
      className={isSpeaking ? "listen-button listening" : "listen-button"}
      onClick={isSpeaking ? stop : speak}
      aria-label={isSpeaking ? `Stop audio: ${text}` : `${label}: ${text}`}
    >
      {isSpeaking ? "■ Stop / Dừng" : `🔊 ${label}`}
    </button>
  );
}

