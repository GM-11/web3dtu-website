const NavBar = () => {
  return (
    <div className="flex w-full sm:w-9/12 md:px-20 px-4 sm:gap-0 gap-4 flex-wrap py-8 my-14 justify-between sm:mx-auto rounded-2xl bg-[#003366]">
      <a className=" text-white font-semibold" href="/departments">
        DEPARTMENTS
      </a>
      <a className=" text-white font-semibold" href="/">
        HOME
      </a>
    </div>
  );
};

export default NavBar;
  