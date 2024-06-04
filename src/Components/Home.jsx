import BoxAnimations from "./BoxAnimations";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="sm:py-20 py-8 mt-56 mb-16 bg-[#003366] transform -rotate-12 mx-auto"
        style={{ width: "120vw", marginLeft: "-10vw" }}
      >
        <div className="w-2/3 sm:w-1/2 text-2xl sm:text-5xl mb-8 mt-5 sm:mb-16 italic sm:mt-10 text-white font-bold mx-auto">
          YOUR FIRST STEP IN BECOMING A WEB3 GIGACHAD
        </div>
        <Carousel />
      </div>
      <div className="mb-5 w-9/12 gap-3 italic mx-auto flex flex-col items-end">
        <div className="text-white font-bold text-xl sm:text-5xl">
          WHY WEB3 WILL
        </div>
        <div className="text-white font-bold text-xl sm:text-5xl">
          BOOST YOUR CAREER
        </div>
      </div>
      <div className="sm:w-9/12 sm:mx-auto">
        <BoxAnimations />
      </div>
    </div>
  );
};

export default Home;
