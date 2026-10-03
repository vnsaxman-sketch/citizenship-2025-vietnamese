import { useMemo, useState } from "react";
import LanguageToggle, {
  type DisplayLanguage,
} from "../components/LanguageToggle";
import QuestionCard from "../components/QuestionCard";
import { sampleQuestions } from "../data/sampleQuestions";

function shuffledQuestions() {
  return [...sampleQuestions].sort(() => Math.random() - 0.5);
}

export default function MockTestPage() {
  const [language, setLanguage] = useState<DisplayLanguage>("en");
  const [questions, setQuestions] = useState(() => shuffledQuestions());
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const finished = correct >= 12 || incorrect >= 9 || current >= 20;
  const currentQuestion = useMemo(
    () => questions[current % questions.length],
    [questions, current],
  );

  function handleAnswer(isCorrect: boolean) {
    if (isCorrect) {
      setCorrect((value) => value + 1);
    } else {
      setIncorrect((value) => value + 1);
    }

    setCurrent((value) => value + 1);
  }

  function restart() {
    setQuestions(shuffledQuestions());
    setCurrent(0);
    setCorrect(0);
    setIncorrect(0);
  }

  if (finished) {
    const passed = correct >= 12;

    return (
      <section className="page-section">
        <div className={`test-result ${passed ? "passed" : "not-passed"}`}>
          <p className="eyebrow">Mock test result / Kết quả thi thử</p>
          <h1>{passed ? "Practice pass!" : "Keep practicing"}</h1>
          <p>
            Correct: {correct} | Incorrect: {incorrect}
          </p>
          <p className="vietnamese">
            Đúng: {correct} | Sai: {incorrect}
          </p>
          <button className="primary-button" onClick={restart}>
            Restart test / Làm lại bài thi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Mock oral test / Thi thử vấn đáp</p>
          <h1>Answer aloud, then self-check</h1>
        </div>
        <LanguageToggle language={language} onChange={setLanguage} />
      </div>

      <div className="score-strip">
        <span>Correct: {correct}/12</span>
        <span>Incorrect: {incorrect}/9</span>
        <span>Asked: {current + 1}/20</span>
      </div>

      <QuestionCard
        key={`${currentQuestion.id}-${current}`}
        question={currentQuestion}
        language={language}
        onCorrect={() => handleAnswer(true)}
        onReview={() => handleAnswer(false)}
      />
    </section>
  );
}

