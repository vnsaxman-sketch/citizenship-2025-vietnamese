import { useState } from "react";
import LanguageToggle, {
  type DisplayLanguage,
} from "../components/LanguageToggle";
import QuestionCard from "../components/QuestionCard";
import { sampleQuestions } from "../data/sampleQuestions";

export default function PracticePage() {
  const [language, setLanguage] = useState<DisplayLanguage>("both");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(() =>
    Number(localStorage.getItem("practiceCorrect") ?? 0),
  );
  const [review, setReview] = useState(() =>
    Number(localStorage.getItem("practiceReview") ?? 0),
  );

  const question = sampleQuestions[index];

  function nextQuestion() {
    setIndex((current) => (current + 1) % sampleQuestions.length);
  }

  function markCorrect() {
    setCorrect((value) => {
      const nextValue = value + 1;
      localStorage.setItem("practiceCorrect", String(nextValue));
      return nextValue;
    });

    nextQuestion();
  }

  function markReview() {
    setReview((value) => {
      const nextValue = value + 1;
      localStorage.setItem("practiceReview", String(nextValue));
      return nextValue;
    });

    nextQuestion();
  }

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
          Question {index + 1} of {sampleQuestions.length}
        </span>
      </div>

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

