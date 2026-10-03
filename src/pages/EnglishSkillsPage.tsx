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

export default function EnglishSkillsPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <p className="eyebrow">English skills / Kỹ năng Anh ngữ</p>
          <h1>Speaking, reading, and writing practice</h1>
        </div>
      </div>

      <article className="question-card">
        <h2>Speaking practice / Luyện nói</h2>
        <p>Answer in a clear, complete voice. You may politely ask an officer to repeat a question.</p>
        <p className="vietnamese">
          Hãy trả lời rõ ràng bằng giọng nói đầy đủ. Bạn có thể lịch sự yêu cầu viên chức lặp lại câu hỏi.
        </p>

        <h3>Reading practice / Luyện đọc</h3>
        {readingPractice.map((sentence) => (
          <p key={sentence} className="study-tip">
            Read aloud: {sentence}
          </p>
        ))}

        <h3>Writing practice / Luyện viết</h3>
        {writingPractice.map((sentence) => (
          <p key={sentence} className="study-tip">
            Copy and write: {sentence}
          </p>
        ))}
      </article>
    </section>
  );
}

