import Logo from "./logo";
import "../index.css";
import { HiOutlineClock, HiOutlineSparkles, HiOutlineCheckCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-display px-4 sm:px-6 py-8 sm:py-12 font-display">
      <div className="max-w-3xl mx-auto p-[10px] sm:p-[20px]">

        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fadeIn delay-100">
          <Logo />
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 py-[10px] sm:py-[20px] font-display animate-fadeUp delay-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-brown">Test Your</span> <span className="text-gold">Hair ID</span>
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed py-[10px] text-lightbrown font-body px-2 sm:px-0">
            Evolve has created a free quiz to help you test your Hair ID <br className="hidden sm:block" />
            and get tailored care recommendations
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-row items-start justify-evenly w-full mb-12 sm:mb-16 flex-wrap gap-6 md:gap-0 animate-fadeUp delay-300">

          <div className="flex flex-col items-center text-center px-2 sm:px-4 max-w-[140px] sm:max-w-[180px] font-body">
            <div className="mb-3 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-darkcream flex items-center justify-center">
              <HiOutlineClock className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            </div>
            <h6 className="font-semibold text-sm sm:text-base mb-1 py-[5px] text-brown">Quick & Easy</h6>
            <p className="text-gray-500 text-[12px] sm:text-[15px] leading-relaxed py-[5px] text-lightbrown">
              Only 5 questions, takes 2 minutes
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-2 sm:px-4 max-w-[140px] sm:max-w-[180px] font-body">
            <div className="mb-3 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-darkcream flex items-center justify-center">
              <HiOutlineSparkles className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            </div>
            <h6 className="font-semibold text-sm sm:text-base mb-1 py-[5px] text-brown">Personalized</h6>
            <p className="text-gray-500 text-[12px] sm:text-[15px] leading-relaxed py-[5px] text-lightbrown">
              Get results tailored to you
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-2 sm:px-4 max-w-[140px] sm:max-w-[180px] font-body">
            <div className="mb-3 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-darkcream flex items-center justify-center">
              <HiOutlineCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            </div>
            <h6 className="font-semibold text-sm sm:text-base mb-1 py-[5px] text-brown">Expert Tips</h6>
            <p className="text-gray-500 text-[12px] sm:text-[15px] leading-relaxed py-[5px] text-lightbrown">
              Professional care recommendations
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="text-center font-body animate-fadeUp delay-400">
          <button
            onClick={() => navigate("/quiz")}
            className="w-[160px] sm:w-[180px] md:w-[200px] h-[40px] border border-[1px] border-[#e8c775] py-5 rounded-[8px] text-white font-semibold text-xs sm:text-sm md:text-base
              bg-gradient-to-r from-[#efc052] to-[#ac7721]
              hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out shadow-sm my-[40px]">
            Start Your Hair Journey
          </button>

          {/* Fixed small screen behavior */}
          <p className="text-gray-400 mt-3 text-[10px] text-lightbrown bg-cream relative z-10 pb-4 px-2">
            No email required · 100% free
          </p>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;