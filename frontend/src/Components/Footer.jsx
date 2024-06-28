import logo from "../assets/logo.svg";

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

const socials = [
  {
    image: "/socials/insta.png",
    link: "https://www.instagram.com/web3dtu/",
  },
  {
    image: "/socials/linkedin.png",
    link: "https://www.linkedin.com/company/web3dtu/",
  },
  {
    image: "/socials/twitter.png",
    link: "https://x.com/web3dtu",
  },
];

// eslint-disable-next-line react/prop-types
const SocialComponent = ({ image, link }) => {
  return (
    <a href={link} className="flex flex-col justify-center mx-5">
      <img src={image} alt="social" className="w-10" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-[full] px-6 sm:px-0 py-4 flex flex-col sm:flex-row mt-8 bg-[#003366]">
      <div className="flex gap-6 sm:w-[50%]   sm:border-r-2 sm:border-b-0 border-b-2 border-white justify-center">
        <img src={logo} alt="logo" className="sm:w-1/2" />
      </div>
      <div className="flex py-5 sm:px-6 w-full flex-row  align-middle justify-between">
        <h1 className="font-bold text-white sm:text-2xl">Follow us on</h1>
        <div className="flex">
          {socials.map((social, index) => {
            return (
              <SocialComponent
                key={index}
                image={social.image}
                link={social.link}
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
    </footer>
  );
};

export default Footer;
