import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full px-6 sm:px-0 py-4 flex flex-col sm:flex-row mt-8 bg-[#003366]">
      <div className="sm:w-2/5 flex sm:border-r-2 sm:border-b-0 border-b-2 border-white justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex py-5 sm:px-6 w-full flex-col gap-6">
        <div className="font-semibold text-white">GET IN TOUCH:</div>
        <div className="flex flex-col  sm:flex-wrap sm:flex-row gap-4 sm:gap-14 sm:justify-evenly">
          <div className="flex flex-col">
            <a href="#" className="text-white font-semibold italic text-xl">
              GOPAL MATHUR
            </a>
            <a
              href="https://wa.me/+918851632662"
              className="text-white font-semibold italic"
            >
              +91-8700148100
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-white font-semibold italic text-xl">
              RHYTHM NARAYAN
            </a>
            <a
              href="https://wa.me/+918851632662"
              className="text-white font-semibold italic"
            >
              +91-8595877347
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-white font-semibold italic text-xl">
              ANSH RASTOGI
            </a>
            <a
              href="https://wa.me/+918851632662"
              className="text-white font-semibold italic"
            >
              +91-8700536695
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-white font-semibold italic text-xl">
              KRISHNA AGRAWAL
            </a>
            <a
              href="https://wa.me/+918851632662"
              className="text-white font-semibold italic"
            >
              +91-8851632662
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-white font-semibold italic text-xl">
              SAQIB MASOOD
            </a>
            <a
              href="https://wa.me/+918826209377"
              className="text-white font-semibold italic"
            >
              +91-8826209377
            </a>
          </div>
        </div>
      </div>
      <div className="sm:w-2/5 flex sm:px-6 sm:border-t-0 border-white border-t-2 sm:border-l-2 flex-col gap-6 py-5">
        <div className="text-white font-semibold italic">MADE BY:</div>
        <div className="flex gap-4 sm:gap-14 sm:justify-start justify-between sm:flex-col">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-white font-semibold italic text-lg sm:text-xl"
            >
              VYOM RATURI
            </a>
            <a
              href="https://wa.me/+919013502528"
              className="text-white font-semibold italic"
            >
              +91-9013502528
            </a>
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-white font-semibold italic text-lg sm:text-xl"
            >
              TALHA ANSARI
            </a>
            <a
              href="https://wa.me/+919891541826"
              className="text-white font-semibold italic"
            >
              +91-9891541826
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
