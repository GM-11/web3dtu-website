const Departments = () => {
  return (
    <div className="flex flex-col px-2 md:px-8 xl:px-0 gap-28 mt-12">
      <div className="lg:text-5xl md:text-4xl text-3xl text-center  text-white">
        Departments
      </div>

      {/* ----------------------- Software ----------------------- */}
      <div className="flex flex-col xl:flex-row">
        <div className="bg-software-dev-image relative bg-no-repeat py-28 pl-5 md:pr-40 md:pl-8 md:py-64 rounded-l-[30px] xl:rounded-l-none rounded-r-[30px] bg-cover">
          <div className="absolute top-0 left-0 right-0 bottom-0 rounded-l-[30px] xl:rounded-l-none bg-[#DB504A80] rounded-r-[30px] bg-opacity-35"></div>
          <div className="lg:text-7xl md:text-5xl text-4xl space-y-4 text-gray-100 z-10 relative font-black italic">
            <div>
              SOFTWARE <br />
              DEVELOPMENT
            </div>
          </div>
        </div>

        <div className="flex py-2 md:gap-10 xl:gap-0 justify-between flex-col">
          <div className="sm:text-3xl lg:text-4xl text-xl text-white md:mt-5 xl:mt-0 xl:w-10/12 mx-auto flex gap-4 md:gap-9 2xl:gap-16 italic flex-col py-3 xl:text-right justify-around">
            <div>
              The world of decentralized applications and smart contracts.
            </div>
            <div>The application layer of blockchain and web3.</div>
            <div>
              The giga-chad generation of blockchain developers are being forged
              here.
            </div>
          </div>
          <div className="flex xl:w-10/12 xl:mx-auto xl:flex-row-reverse">
            <a
              href="https://chat.whatsapp.com/Fanj818GrxHGG5QCy1oXc0"
              target="_blank"
              className="rounded-[50px] md:px-16 px-8 border-2 md:border-4 border-[#DB504A] py-3 md:py-5 text-xl md:text-2xl bg-[#00336680] text-white italic font-black"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------- Core ----------------------- */}
      <div className="flex flex-col xl:flex-row-reverse">
        <div className="bg-core-dev-image relative bg-no-repeat pl-4 py-32 pr-5 md:pl-40 md:pr-12 md:py-64 rounded-r-[30px] xl:rounded-r-none rounded-l-[30px] bg-cover">
          <div className="absolute top-0 left-0 right-0 bottom-0 rounded-r-[30px] xl:rounded-r-none bg-[#DB504A80] rounded-l-[30px] bg-opacity-35"></div>
          <div className="lg:text-7xl md:text-5xl text-4xl xl:text-right space-y-4 text-gray-100 z-10 relative font-black italic">
            <div>
              CORE <br />
              DEVELOPMENT
            </div>
          </div>
        </div>

        <div className="flex py-2 md:gap-10 xl:gap-0 justify-between flex-col">
          <div className="sm:text-3xl lg:text-4xl text-xl text-white md:mt-5 xl:mt-0 xl:w-10/12 mx-auto flex gap-4 md:gap-9 2xl:gap-16 italic flex-col py-3 justify-around">
            <div>Diving into the core technology of blockchain</div>
            <div>
              Where the actual data, actual transactions and actual magic
              happens.
            </div>
            <div>Core engineering blockchain is being mastered here.</div>
          </div>
          <div className="flex xl:w-10/12 xl:mx-auto">
            <a
              href="https://chat.whatsapp.com/LuUZ9cdZDta4wDXWT9J1LL"
              target="_blank"
              className="rounded-[50px] md:px-16 px-8 border-2 md:border-4 border-[#DB504A] py-3 md:py-5 text-xl md:text-2xl bg-[#00336680] text-white italic font-black"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
