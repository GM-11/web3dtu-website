import { useState } from "react";

const BoxAnimations = () => {
  const [activeBox, setActiveBox] = useState(null);

  const boxes1 = [
    {
      id: "box1",
      title: "POWER TO THE PEOPLE",
      description:
        "The people hold the power of their data and the value of the assets they hold",
      defaultClass: "sm:w-1/2 w-10/12 h-full bg-[#DB504A]",
    },
    {
      id: "box2",
      title: "NEW INTERNET PARADIGM",
      description:
        "Web3 offers a more decentralized and secure paradigm for the internet, empoweing other tech fields.",
      defaultClass: "sm:w-1/2 w-10/12 h-full bg-[#DB504A]",
    },
  ];

  const boxes2 = [
    {
      id: "box3",
      title: "VALUE IN TECH",
      description:
        "For the first time, good behaviour is actually incentivised",
      defaultClass: "sm:w-1/2 w-10/12 h-full bg-[#DB504A]",
    },
    {
      id: "box4",
      title: "DEMAND AND SUPPLY MISMATCH",
      description:
        "There is big demand for blockchain developers and very small supply of it",
      defaultClass: "sm:w-1/2 w-10/12  h-full bg-[#DB504A]",
    },
  ];

  console.log(window.innerWidth);

  if (window.innerWidth > 640) {
    return (
      <>
        <div
          className={`${
            activeBox === "box1" || activeBox === "box2" ? "h-52" : "h-32"
          } transition-all duration-500 flex gap-3 mb-3 mx-auto`}
        >
          {boxes1.map((box) => (
            <div
              key={box.id}
              className={`${
                activeBox === box.id ? "w-3/4 h-full" : box.defaultClass
              } transition-all p-8 duration-500 rounded-xl bg-[#DB504A] flex justify-center`}
              onMouseEnter={() => setActiveBox(box.id)}
              onMouseLeave={() => setActiveBox(null)}
            >
              <div className="flex flex-col justify-around">
                <div className="font-bold text-2xl italic text-white">
                  {box.title}
                </div>
                {activeBox === box.id && (
                  <div className="text-white text-lg italic">
                    {box.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            activeBox === "box3" || activeBox === "box4" ? "h-52" : "h-32"
          } transition-all duration-500 min-h-fit flex gap-3 mb-3 mx-auto`}
        >
          {boxes2.map((box) => (
            <div
              key={box.id}
              className={`${
                activeBox === box.id ? "w-3/4 h-full" : box.defaultClass
              } transition-all p-8 duration-500 rounded-xl bg-[#DB504A] flex justify-center`}
              onMouseEnter={() => setActiveBox(box.id)}
              onMouseLeave={() => setActiveBox(null)}
            >
              <div className="flex flex-col justify-around">
                <div className="font-bold text-2xl italic text-white">
                  {box.title}
                </div>
                {activeBox === box.id && (
                  <div className="text-white text-lg italic">
                    {box.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex gap-3 ml-2 flex-col">
          {boxes1.map((box) => (
            <div
              key={box.id}
              className={`${
                activeBox === box.id ? "w-full h-full" : box.defaultClass
              } transition-all p-8 duration-500 rounded-xl bg-[#DB504A] flex justify-center`}
              onMouseEnter={() => setActiveBox(box.id)}
              onMouseLeave={() => setActiveBox(null)}
            >
              <div className="flex flex-col justify-around">
                <div className="font-bold text-xl sm:text-2xl italic text-white">
                  {box.title}
                </div>
                {activeBox === box.id && (
                  <div className="text-white text-lg italic">
                    {box.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 ml-2 mt-3 flex-col">
          {boxes2.map((box) => (
            <div
              key={box.id}
              className={`${
                activeBox === box.id ? "w-full h-full" : box.defaultClass
              } transition-all p-8 duration-500 rounded-xl bg-[#DB504A] flex justify-center`}
              onMouseEnter={() => setActiveBox(box.id)}
              onMouseLeave={() => setActiveBox(null)}
            >
              <div className="flex flex-col justify-around">
                <div className="font-bold text-lg sm:text-2xl italic text-white">
                  {box.title}
                </div>
                {activeBox === box.id && (
                  <div className="text-white text-lg italic">
                    {box.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default BoxAnimations;
