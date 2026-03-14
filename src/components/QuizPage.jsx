import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selected) return;
    const updated = {
      ...answers,
      [currentQuestion.category]: selected
    };
    setAnswers(updated);
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/results", { state: { answers: updated } });
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-cream font-display flex flex-col px-[10px] sm:px-[20px]">

      {/* ── TOP PROGRESS BAR ── */}
      <div className="px-3 sm:px-6 pt-4 sm:pt-6 pb-4 animate-fadeIn delay-100">
        <div className="flex justify-between text-sm mb-2 my-[5px] sm:my-[10px] p-[5px] sm:p-[10px]">
          <span className="text-brown-500 text-[11px] sm:text-[13px]">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-lightbrown font-medium text-[11px] sm:text-[13px]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-[#e8e0d5] rounded-full h-[6px]">
          <div
            className="h-[6px] rounded-full bg-gradient-to-r from-[#c9961f] to-[#a97422] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        key={current}
        className="flex-1 px-3 sm:px-6 py-4 sm:py-8 max-w-2xl w-full mx-auto font-body"
      >

        {/* Category Badge */}
        <div className="flex justify-center mb-4 sm:mb-6 animate-fadeUp delay-100">
          <span className="text-center py-[5px] my-[5px] rounded-full bg-darkcream text-gold text-xs sm:text-sm font-medium w-[80px] sm:w-[90px] h-[28px] sm:h-[30px]">
            {currentQuestion.category}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-[17px] sm:text-[20px] md:text-[22px] font-bold text-center text-brown mb-2 leading-snug my-[10px] sm:my-[15px] animate-fadeUp delay-200">
          {currentQuestion.question}
        </h2>

        {/* Question Description */}
        <p className="text-center text-gold text-xs sm:text-sm mb-4 sm:mb-8 my-[10px] sm:my-[15px] animate-fadeUp delay-300">
          {currentQuestion.description}
        </p>

        {/* Answer Options */}
        <div className="flex flex-col gap-2 sm:gap-4 font-body animate-fadeUp delay-400">
          {currentQuestion.options.map((option) => (
            <button
              key={option.title}
              onClick={() => setSelected(option.title)}
              className={`w-full text-left px-[12px] sm:px-[20px] py-3 sm:py-5 rounded-[12px] border-[1px]
                transition-all duration-200 flex items-center gap-3 sm:gap-4
                min-h-[55px] sm:h-[70px] my-[5px] sm:my-[10px]
                ${selected === option.title
                  ? "border-[#c9961f] bg-[#fdf6e3] shadow-[0_0_0_1px_#c9961f]"
                  : "border-[#e2d9ce] bg-[#fbfaf8] hover:border-[#c9961f] hover:shadow-[0_0_0_1px_#c9961f40]"
                }`}
            >
              {selected === option.title ? (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#c9961f] text-[18px] sm:text-[22px] flex-shrink-0 pr-[10px] sm:pr-[20px]"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[#c9b99a] text-[18px] sm:text-[22px] flex-shrink-0 pr-[10px] sm:pr-[20px]"
                />
              )}
              <div>
                <p className="font-semibold text-[11px] sm:text-sm text-gray-800">
                  {option.title}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-[3px] sm:mt-[4px]">
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── BOTTOM NAVIGATION ── */}
      <div className="border-t border-[#e8e0d5] px-3 sm:px-6 py-3 sm:py-5 animate-fadeUp delay-500">
        <div className="max-w-2xl mx-auto flex justify-between items-center m-[10px] sm:m-[20px]">

          {/* ✅ ONLY THIS BUTTON CHANGED */}
          <button
              onClick={handleBack}
              className="bg-cream rounded-[5px] text-brown border border-transparent text-xs sm:text-sm
                flex flex-row items-center gap-1 whitespace-nowrap
                h-[32px] sm:h-[35px] px-[10px] sm:px-[12px]
                hover:bg-gradient-to-r hover:from-[#c9961f] hover:to-[#a97422] hover:text-white transition-all duration-200">
              ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`px-8 py-3 rounded-[5px] text-white text-sm
              font-semibold transition-all duration-200 w-[80px] h-[40px] border border-transparent mr-[20px]
              ${selected
                ? "bg-gradient-to-r from-[#c9961f] to-[#a97422] hover:opacity-90 shadow-[0_4px_14px_#c9961f55] cursor-pointer"
                : "bg-[#e2d9ce] text-[#b8a898] cursor-not-allowed"
              }`}>
            Next →
          </button>

        </div>
      </div>

    </div>
  );
}

export default QuizPage;