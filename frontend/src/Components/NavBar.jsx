import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex w-full md:px-20 sm:gap-0 gap-4 flex-wrap py-8  justify-between sm:mx-auto  bg-[#003366] text-lg">
      <Link
        className=" text-white font-semibold hover:underline"
        to="/departments"
      >
        DEPARTMENTS
      </Link>
      <Link className=" text-white font-semibold -translate-x-7 hover:underline" to="/">
        HOME
      </Link>

      <Link className=" text-white font-semibold hover:underline" to="/team">
        TEAM
      </Link>
    </nav>
  );
};

export default NavBar;
