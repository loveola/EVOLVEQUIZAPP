// src/App.jsx  — now only handles routing, nothing else

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
