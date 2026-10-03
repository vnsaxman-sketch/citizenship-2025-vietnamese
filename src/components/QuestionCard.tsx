import { useState } from "react";
import type { CitizenshipQuestion } from "../types/citizenship";
import type { DisplayLanguage } from "./LanguageToggle";

interface QuestionCardProps {
  question: CitizenshipQuestion;
  language: DisplayLanguage;
  onCorrect?: () => void;
  onReview?: () => void;
  showButtons?: boolean;
}

export default function QuestionCard({
  question,
  language,
  onCorrect,
  onReview,
  showButtons = true,
}: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="question-card">
      <span className="topic-label">{question.topic}</span>

      {language !== "vi" && <h2>{question.questionEn}</h2>}
      {language !== "en" && <p className="vietnamese">{question.questionVi}</p>}

      {!showAnswer ? (
        <button className="primary-button" onClick={() => setShowAnswer(true)}>
          Show answer / Xem đáp án
        </button>
      ) : (
        <div className="answer-box">
          {language !== "vi" && (
            <>
              <h3>Accepted answer</h3>
              <p>{question.acceptedAnswersEn.join(" / ")}</p>
              <p className="explanation">{question.explanationEn}</p>
              <p className="study-tip">Tip: {question.studyTipEn}</p>
            </>
          )}

          {language !== "en" && (
            <>
              <h3>Đáp án</h3>
              <p>{question.answerVi}</p>
              <p className="explanation">{question.explanationVi}</p>
              <p className="study-tip">Mẹo: {question.studyTipVi}</p>
            </>
          )}

          {showButtons && (
            <div className="answer-actions">
              <button className="success-button" onClick={onCorrect}>
                I got it / Tôi trả lời đúng
              </button>
              <button className="review-button" onClick={onReview}>
                Review again / Ôn lại
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

