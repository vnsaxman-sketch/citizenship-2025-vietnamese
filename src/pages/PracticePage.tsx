import { useState } from "react";
import LanguageToggle, {
  type DisplayLanguage,
} from "../components/LanguageToggle";
import QuestionCard from "../components/QuestionCard";
import { civicsQuestions2025 } from "../data/civicsQuestions2025";

const CORRECT_KEY = "practiceCorrect";
const REVIEW_KEY = "practiceReview";
const INDEX_KEY = "practiceIndex";

export default function PracticePage() {
  const [language, setLanguage] = useState<DisplayLanguage>("both");

  const [index, setIndex] = useState(() => {
    const savedIndex = Number(localStorage.getItem(INDEX_KEY) ?? 0);

    if (
      Number.isInteger(savedIndex) &&
      savedIndex >= 0 &&
      savedIndex < civicsQuestions2025.length
    ) {
      return savedIndex;
    }

    return 0;
  });

  const [correct, setCorrect] = useState(() => {
    const savedCorrect = Number(localStorage.getItem(CORRECT_KEY) ?? 0);

    return Number.isFinite(savedCorrect) && savedCorrect >= 0
      ? savedCorrect
      : 0;
  });

  const [review, setReview] = useState(() => {
    const savedReview = Number(localStorage.getItem(REVIEW_KEY) ?? 0);

    return Number.isFinite(savedReview) && savedReview >= 0
      ? savedReview
      : 0;
  });

  const [completed, setCompleted] = useState(false);

  if (civicsQuestions2025.length === 0) {
    return (
      <section className="page-section">
        <div className="question-card">
          <p className="eyebrow">Question bank needed</p>
          <h1>No citizenship questions have been added yet.</h1>

          <p>
            Add question objects inside{" "}
            <code>src/data/civicsQuestions2025.ts</code>.
          </p>

          <p className="vietnamese">
            Bạn chưa thêm câu hỏi nào. Hãy thêm dữ liệu câu hỏi vào tệp{" "}
            <code>src/data/civicsQuestions2025.ts</code>.
          </p>
        </div>
      </section>
    );
  }

  function nextQuestion() {
    if (index === civicsQuestions2025.length - 1) {
      setCompleted(true);
      localStorage.removeItem(INDEX_KEY);
      return;
    }

    setIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;

      localStorage.setItem(INDEX_KEY, String(nextIndex));

      return nextIndex;
    });
  }

  function markCorrect() {
    setCorrect((currentCorrect) => {
      const nextCorrect = currentCorrect + 1;

      localStorage.setItem(CORRECT_KEY, String(nextCorrect));

      return nextCorrect;
    });

    nextQuestion();
  }

  function markReview() {
    setReview((currentReview) => {
      const nextReview = currentReview + 1;

      localStorage.setItem(REVIEW_KEY, String(nextReview));

      return nextReview;
    });

    nextQuestion();
  }

  function startAgain() {
    setIndex(0);
    setCorrect(0);
    setReview(0);
    setCompleted(false);

    localStorage.setItem(INDEX_KEY, "0");
    localStorage.setItem(CORRECT_KEY, "0");
    localStorage.setItem(REVIEW_KEY, "0");
  }

  if (completed) {
    return (
      <section className="page-section">
        <div className="test-result passed">
          <p className="eyebrow">Practice round complete</p>

          <h1>Great job!</h1>

          <p>
            You completed all {civicsQuestions2025.length} available questions.
          </p>

          <p className="vietnamese">
            Bạn đã hoàn thành tất cả {civicsQuestions2025.length} câu hỏi hiện
            có.
          </p>

          <p>
            Correct: {correct} | Review: {review}
          </p>

          <button type="button" className="primary-button" onClick={startAgain}>
            Start again / Học lại
          </button>
        </div>
      </section>
    );
  }

  const question = civicsQuestions2025[index];

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Practice mode / Chế độ luyện tập</p>
          <h1>Learn one question at a time</h1>
        </div>

        <LanguageToggle language={language} onChange={setLanguage} />
      </div>

      <div className="score-strip">
        <span>Correct: {correct}</span>
        <span>Review: {review}</span>
        <span>
          Question {index + 1} of {civicsQuestions2025.length}
        </span>
      </div>

      <p className="study-tip">
        Question bank progress: {civicsQuestions2025.length} of 128 questions
        added.
      </p>

      <QuestionCard
        key={question.id}
        question={question}
        language={language}
        onCorrect={markCorrect}
        onReview={markReview}
      />
    </section>
  );
}

