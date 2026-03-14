import { useLocation, useNavigate } from "react-router-dom";
import { generateResults } from "../data/result";

function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers;
  const results = generateResults(answers);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Hair Profile — Evolve",
        text: "I just discovered my unique hair profile! Take the quiz to find yours 💛",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-cream font-display px-3 sm:px-6">
      <div className="max-w-[900px] mx-auto py-[30px] sm:py-[50px] pb-[20px] sm:pb-[30px] bg-cream">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 animate-fadeUp delay-100">
          <span className="inline-block bg-gradient-to-r from-[#efc052] to-[#ac7721] text-white text-[12px] sm:text-[15px] font-semibold px-3 sm:px-5 py-[5px] rounded-full mb-3 sm:mb-5 w-[170px] sm:w-[200px] h-[36px] sm:h-[40px] m-[10px] font-display">
            Your Results Are Ready ✨
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown mb-[15px] sm:mb-[20px]">
            Your Unique Hair Profile
          </h1>
          <p className="text-brown-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-[15px] font-body px-2 sm:px-0">
            Based on your answers, we've created a personalised analysis of your hair characteristics
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-8 sm:mb-12 p-[10px] sm:p-[20px] font-body animate-fadeUp delay-200">
          {Object.entries(results).map(([key, card]) => (
            <div
              key={key}
              className="bg-[#fbfaf8] rounded-[16px] border border-[#e8e0d5] shadow-sm p-4 sm:p-6 md:p-[30px] p-[10px] sm:m-[10px] m-[10px]"
            >
              {/* Category Label */}
              <p className="text-[9px] sm:text-[11px] md:text-[12px] font-bold text-gold uppercase tracking-widest mb-[8px] sm:mb-[10px]">
                {key}
              </p>

              {/* Emoji + Title */}
              <div className="flex items-center gap-2 mb-[8px] sm:mb-[10px]">
                <span className="text-lg sm:text-2xl p-[3px] sm:p-[5px]">{card.emoji}</span>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-brown">{card.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[11px] sm:text-sm md:text-base leading-relaxed mb-[8px] sm:mb-[10px] p-[6px] sm:p-[10px] tracking-[0.5px] sm:tracking-[1px]">
                {card.description}
              </p>

              {/* Tips */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-sm sm:text-base p-[3px] sm:p-[5px]">💡</span>
                <p className="text-[11px] sm:text-sm md:text-base font-semibold text-gold p-[6px] sm:p-[10px] tracking-[1px] sm:tracking-[2px]">Tips for you</p>
              </div>
              <ul className="space-y-1 sm:space-y-2">
                {card.tips.map((tip, i) => (
                    <li key={i} className="text-[11px] sm:text-sm md:text-base text-gray-600 flex items-start gap-2 py-[3px] sm:py-[5px] tracking-[0.5px] sm:tracking-[1px]">
                        <span className="text-gold flex-shrink-0 mt-[2px]">•</span>
                        <span className="ml-[2px]">{tip}</span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 ml-[5px] sm:ml-[10px] animate-fadeUp delay-300">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-[10px] text-brown text-[11px] sm:text-sm font-semibold w-[100px] sm:w-[120px] h-[30px] pl-[8px] sm:pl-[10px] m-[10px] sm:m-[15px] border border-[#c9961f] bg-cream hover:bg-gradient-to-r from-[#c9961f] to-[#a97422]">
            ↺ Retake Quiz
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-[10px] text-white text-[11px] sm:text-sm font-semibold w-[100px] sm:w-[120px] h-[30px] border border-transparent
              bg-gradient-to-r from-[#c9961f] to-[#a97422] pl-[5px]
              hover:opacity-90 transition shadow-sm">
            ↗ Share Results
          </button>
        </div>

      </div>
    </div>
  );
}

export default ResultsPage;