import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Independent bilingual study aid</p>

      <h1>
        U.S. Citizenship 2026 Practice
        <span>Luyện Thi Quốc Tịch Hoa Kỳ 2026</span>
      </h1>

      <p className="hero-text">
        Practice citizenship civics, English speaking, reading, and writing
        with simple English and clear Vietnamese learning support.
      </p>

      <p className="hero-text vietnamese">
        Luyện thi quốc tịch với nội dung công dân, nói tiếng Anh, đọc và viết,
        có phần giải thích rõ ràng bằng tiếng Việt.
      </p>

      <div className="hero-actions">
        <Link to="/practice" className="primary-button">
          Start practice / Bắt đầu luyện tập
        </Link>
        <Link to="/mock-test" className="secondary-button">
          Take mock test / Thi thử
        </Link>
      </div>

      <aside className="notice">
        <strong>Important:</strong> This independent study tool is not legal
        advice and is not affiliated with USCIS. Verify current official test
        information before your interview.
      </aside>
    </section>
  );
}

