import { useState } from "react";
import ListenButton from "../components/ListenButton";

const readingPractice = [
  "Citizens can vote.",
  "The President lives in the White House.",
  "Congress makes federal laws.",
];

const writingPractice = [
  "Citizens vote in elections.",
  "The Constitution is the supreme law.",
  "Washington, D.C., is the capital.",
];

const speakingPractice = [
  "Yes, I understand.",
  "Please repeat the question.",
  "I have lived at my current address for five years.",
  "I want to become a United States citizen.",
];

export default function EnglishSkillsPage() {
  const [speed, setSpeed] = useState(0.85);

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <p className="eyebrow">English skills / Kỹ năng Anh ngữ</p>
          <h1>Listen, speak, read, and write</h1>
        </div>
      </div>

      <article className="question-card">
        <h2>Audio speed / Tốc độ âm thanh</h2>

        <p>
          Choose a slower speed first, then increase it as your listening
          improves.
        </p>

        <div className="audio-speed-controls">
          <button
            type="button"
            className={speed === 0.7 ? "speed-button active" : "speed-button"}
            onClick={() => setSpeed(0.7)}
          >
            Slow
          </button>

          <button
            type="button"
            className={speed === 0.85 ? "speed-button active" : "speed-button"}
            onClick={() => setSpeed(0.85)}
          >
            Normal
          </button>

          <button
            type="button"
            className={speed === 1 ? "speed-button active" : "speed-button"}
            onClick={() => setSpeed(1)}
          >
            Test speed
          </button>
        </div>

        <p className="vietnamese">
          Chọn tốc độ chậm trước, sau đó tăng tốc khi khả năng nghe của bạn tốt
          hơn.
        </p>
      </article>

      <article className="question-card english-section">
        <h2>Speaking practice / Luyện nói</h2>

        <p>
          Listen first. Then repeat the sentence aloud clearly and slowly.
        </p>

        <p className="vietnamese">
          Hãy nghe trước. Sau đó lặp lại câu bằng tiếng Anh, rõ ràng và chậm
          rãi.
        </p>

        <div className="sentence-list">
          {speakingPractice.map((sentence, index) => (
            <div className="audio-sentence" key={sentence}>
              <div>
                <span className="sentence-number">{index + 1}</span>
                <p>{sentence}</p>
              </div>

              <ListenButton
                text={sentence}
		lang="en-US"
                label="Listen English"
                rate={speed}
              />
            </div>
          ))}
        </div>
      </article>

      <article className="question-card english-section">
        <h2>Reading practice / Luyện đọc</h2>

        <p>
          Listen to each sentence, then read it aloud. Try to read without
          listening a second time.
        </p>

        <p className="vietnamese">
          Hãy nghe từng câu, sau đó đọc to. Cố gắng đọc mà không nghe lại lần
          thứ hai.
        </p>

        <div className="sentence-list">
          {readingPractice.map((sentence, index) => (
            <div className="audio-sentence" key={sentence}>
              <div>
                <span className="sentence-number">{index + 1}</span>
                <p>{sentence}</p>
              </div>

              <ListenButton
                text={sentence}
		lang="en-US"
                label="Listen English"
                rate={speed}
              />
            </div>
          ))}
        </div>
      </article>

      <article className="question-card english-section">
        <h2>Writing practice / Luyện viết</h2>

        <p>
          Press Listen. Write the sentence you hear. Then compare your writing
          with the sentence shown.
        </p>

        <p className="vietnamese">
          Nhấn Nghe. Viết câu bạn nghe được. Sau đó so sánh bài viết của bạn
          với câu hiển thị.
        </p>

        <div className="sentence-list">
          {writingPractice.map((sentence, index) => (
            <div className="audio-sentence" key={sentence}>
              <div>
                <span className="sentence-number">{index + 1}</span>
                <p>{sentence}</p>
              </div>

              <ListenButton
                text={sentence}
		lang="en-US"
                label="Listen English"
                rate={speed}
              />
            </div>
          ))}
        </div>
      </article>

      <aside className="notice english-notice">
        <strong>USCIS English test reminder:</strong> You must demonstrate
        basic English speaking, reading, and writing. For reading and writing,
        USCIS generally gives up to three sentences and you need to correctly
        read or write one sentence. [web:16]
      </aside>
    </section>
  );
}

