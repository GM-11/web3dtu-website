import logo from "../assets/logo.svg";

// eslint-disable-next-line react/prop-types
const MemberComponent = ({ name, link, position }) => (
  <a
    href={link}
    target="_blank"
    className="flex flex-col cursor-pointer text-white font-semibold italic"
  >
    <p className="text-xl">{name}</p>
    <p className="text-sm">{position}</p>
  </a>
);

// eslint-disable-next-line react/prop-types
const MadeByComponent = ({ name, link }) => (
  <a href={link} className="flex flex-col justify-center">
    <p href="#" className="text-white font-semibold italic text-lg sm:text-xl">
      {name}
    </p>
  </a>
);

const madeBy = [
  {
    name: "VYOM RATURI",
    link: "https://www.linkedin.com/in/vyomraturi/",
  },
];

const members = [
  {
    name: "GOPAL MATHUR",
    link: "https://www.linkedin.com/in/gopal-mathur-70044125a/",
    position: "President",
  },
  {
    name: "RHYTHM NARAYAN",
    link: "https://www.linkedin.com/in/rhythm-narayan/",
    position: "Vice Presisdent",
  },
  {
    name: "ANSH RASTOGI",
    link: "https://www.linkedin.com/in/ansh-rastogi-539ab6233/",
    position: "Head of Department",
  },

  {
    name: "KRISHNA AGRAWAL",
    link: "https://www.linkedin.com/in/krishna-agrawal-006640209",
    position: "Head of Department",
  },
  {
    name: "SAQIB MASOOD",
    link: "https://www.linkedin.com/in/saqib-masood-0b569b1b4/",
    position: "Developer Relations",
  },
  {
    name: "ROMIT RANJAN",
    link: "https://www.linkedin.com/in/romit-ranjan/",
    position: "Treasurer",
  },
];

const Footer = () => {
  return (
    <div className="w-[full] px-6 sm:px-0 py-4 flex flex-col sm:flex-row mt-8 bg-[#003366]">
      <div className="sm:w-2/5 flex gap-6  sm:border-r-2 sm:border-b-0 border-b-2 border-white justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex py-5 sm:px-6 w-full flex-col gap-6">
        <div className="font-semibold text-white">GET IN TOUCH</div>
        <div className="flex flex-col  sm:flex-wrap sm:flex-row gap-4 sm:gap-14 sm:justify-evenly">
          {members.map((member, index) => {
            return (
              <MemberComponent
                key={index}
                position={member.position}
                name={member.name}
                link={member.link}
              />
            );
          })}
        </div>
      </div>
      <div className="sm:w-2/5 flex sm:px-6 sm:border-t-0 border-white border-t-2 sm:border-l-2 flex-col gap-6 py-5">
        <div className="text-white font-semibold italic">MADE BY:</div>
        <div className="flex gap-4 sm:gap-14 sm:justify-start justify-between sm:flex-col">
          {madeBy.map((member, index) => {
            return (
              <MadeByComponent
                key={index}
                name={member.name}
                link={member.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
