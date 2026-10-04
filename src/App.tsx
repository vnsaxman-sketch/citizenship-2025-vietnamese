import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PracticePage from "./pages/PracticePage";
import MockTestPage from "./pages/MockTestPage";
import EnglishSkillsPage from "./pages/EnglishSkillsPage";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          Citizenship 2025
          <span>English + Vietnamese</span>
        </NavLink>

	<NavLink to="/english-skills">English Skills</NavLink>

        <nav>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/mock-test">Mock Test</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/mock-test" element={<MockTestPage />} />
	  <Route path="/english-skills" element={<EnglishSkillsPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>
          Independent study aid. Not legal advice. Not affiliated with,
          endorsed by, or approved by USCIS.
        </p>
        <p>
          Tài liệu học độc lập. Không phải tư vấn pháp lý. Không liên kết,
          không được USCIS chứng thực hoặc phê duyệt.
        </p>
        <p>
          Official USCIS study materials:{" "}
          <a
            href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test"
            target="_blank"
            rel="noreferrer"
          >
            USCIS Study for the Test
          </a>
        </p>
	<p> Developed by Long Nguyen </p>
      </footer>
    </div>
  );
}

export default App;

