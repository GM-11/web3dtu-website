import Carousel from "../Components/Carousel";
import logo from "../assets/logo.svg";
import BoxAnimations from "../Components/BoxAnimations";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ----------------------- Hero Section ----------------------- */}
      <div className="relative bg-hero-image bg-no-repeat bg-cover h-full sm:py-20 py-8 text-white text-center">
        {/* Transparent Blue Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00336680] bg-opacity-35"></div>

        {/* Ensure content is positioned relative to the overlay */}
        <div className="relative flex w-full justify-center flex-col z-10">
          <img className="h-96" src={logo} alt="logo" />
          <div className="sm:text-3xl text-2xl -mt-24 sm:-mt-16 italic font-black">
            The Web3 and Blockchain Society of DTU
          </div>
          <div className="mt-12">
            <a
              target="_blank"
              href="https://chat.whatsapp.com/LP6Vn0A29uj7eFS2MCcjx2"
              className="py-3 pb-4 px-16 sm:pt-7 sm:pb-8 w-fit sm:px-48 font-black bg-[#00336680] bg-opacity-45 italic text-2xl sm:text-3xl border-4 border-[#DB504A] rounded-[50px]"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------- Carousel ----------------------- */}
      <div
        className="sm:py-20 py-8 mt-56 mb-16 bg-[#003366] transform -rotate-12 mx-auto"
        style={{ width: "120vw", marginLeft: "-10vw" }}
      >
        <div className="w-2/3 sm:w-1/2 text-xl sm:text-5xl mb-8 mt-5 sm:mb-16 italic sm:mt-10 text-white font-bold mx-auto">
          YOUR FIRST STEP IN BECOMING A WEB3 GIGACHAD
        </div>
        <Carousel />
      </div>

      {/* ----------------------- Why Web3 ----------------------- */}
      <div className="mb-5 w-9/12 gap-3 italic mx-auto flex flex-col items-end">
        <div className="text-white font-bold text-xl sm:text-5xl">
          WHY WEB3 WILL
        </div>
        <div className="text-white font-bold text-xl sm:text-5xl">
          BOOST YOUR CAREER
        </div>
      </div>

      {/* ----------------------- Box Animations ----------------------- */}
      <div className="sm:w-9/12 sm:mx-auto">
        <BoxAnimations />
      </div>
    </div>
  );
};

export default Home;
