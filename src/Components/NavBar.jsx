const NavBar = () => {
  return (
    <div className="flex w-9/12 px-20 py-8 my-14 justify-between mx-auto rounded-2xl bg-[#003366]">
      <a className="underline text-white" href="/departments">
        DEPARTMENTS
      </a>
      <a className="underline text-white" href="#">
        WEB3DTU
      </a>
      <a className="underline text-white" href="#">
        TEAM
      </a>
    </div>
  );
};

export default NavBar;
