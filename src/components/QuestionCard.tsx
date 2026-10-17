import { useState } from "react";
import type { CitizenshipQuestion } from "../types/citizenship";
import type { DisplayLanguage } from "./LanguageToggle";
import ListenButton from "./ListenButton";

interface QuestionCardProps {
  question: CitizenshipQuestion;
  language: DisplayLanguage;
  onCorrect?: () => void;
  onReview?: () => void;
}

export default function QuestionCard({
  question,
  language,
  onCorrect,
  onReview,
}: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const showEnglish = language === "both" || language === "en";
  const showVietnamese = language === "both" || language === "vi";

  return (
    <article className="question-card">
      <span className="topic-label">{question.topic}</span>

      {question.isSixtyFiveTwenty && (
        <span className="special-label">65/20</span>
      )}

      {showEnglish && (
        <section className="question-language-section">
          <h2>{question.questionEn}</h2>

          <ListenButton
            text={question.questionEn}
            lang="en-US"
            label="Listen English"
          />
        </section>
      )}

      {showVietnamese && (
        <section className="question-language-section">
          <p className="vietnamese question-translation">
            {question.questionVi}
          </p>

          <ListenButton
            text={question.questionVi}
            lang="vi-VN"
            label="Nghe tiếng Việt"
          />
        </section>
      )}

      {!showAnswer ? (
        <button
          type="button"
          className="primary-button show-answer-button"
          onClick={() => setShowAnswer(true)}
        >
          Show answer / Xem đáp án
        </button>
      ) : (
        <div className="answer-box">
          {showEnglish && (
            <section className="answer-language-section">
              <h3>Accepted answer</h3>

              <p>{question.acceptedAnswersEn.join(" / ")}</p>

              <ListenButton
                text={question.acceptedAnswersEn.join(". ")}
                lang="en-US"
                label="Listen answer"
              />

              <p className="explanation">{question.explanationEn}</p>

              <p className="study-tip">Tip: {question.studyTipEn}</p>
            </section>
          )}

          {showVietnamese && (
            <section className="answer-language-section">
              <h3>Đáp án được chấp nhận</h3>

              <p className="vietnamese">{question.answerVi}</p>

              <ListenButton
                text={question.answerVi}
                lang="vi-VN"
                label="Nghe đáp án"
              />

              <p className="vietnamese explanation">
                {question.explanationVi}
              </p>

              <p className="vietnamese study-tip">
                Mẹo: {question.studyTipVi}
              </p>
            </section>
          )}

          {question.needsCurrentOfficial && (
            <p className="current-warning">
              Current-official answers may change. Verify this answer on
              USCIS.gov before your interview.
              <br />
              <span className="vietnamese">
                Câu trả lời về quan chức đương nhiệm có thể thay đổi. Hãy kiểm
                tra USCIS.gov trước buổi phỏng vấn.
              </span>
            </p>
          )}

          <div className="answer-actions">
            <button
              type="button"
              className="success-button"
              onClick={onCorrect}
            >
              I got it / Tôi trả lời đúng
            </button>

            <button
              type="button"
              className="review-button"
              onClick={onReview}
            >
              Review again / Ôn lại
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

