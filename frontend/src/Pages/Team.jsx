const fac_ad = {
  name: "Dr. Pawan Singh Mehra",
  title: "Faculty Advisor",
  linkedin: "https://www.linkedin.com/in/dr-pawan-singh-mehra-4484637a/",
  image: "/team-images/pawan-sir.PNG",
};

// const pres = {
//   name: "Gopal Mathur",
//   title: "President",
//   linkedin: "https://www.linkedin.com/in/dr-pawan-singh-mehra-4484637a/",
//   image: "/team-images/gopal.PNG",
// };

const team = [
  {
    name: "Gopal Mathur",
    title: "President",
    linkedin: "https://www.linkedin.com/in/gopal-mathur-70044125a/",
    image: "/team-images/gopal.PNG",
  },
  {
    name: "Rhythm Narayan",
    title: "Vice President",
    linkedin: "https://www.linkedin.com/in/rhythm-narayan/",
    image: "/team-images/rhythm.PNG",
  },
  {
    name: "Ansh Rastogi",
    title: "Head of Department",
    linkedin: "https://www.linkedin.com/in/ansh-rastogi-539ab6233/  ",
    image: "/team-images/ansh.PNG",
  },
  {
    name: "Krishna Agrawal",
    title: "Head of Department",
    linkedin: "https://www.linkedin.com/in/krishna-agrawal-006640209/",
    image: "/team-images/krishna.PNG",
  },
  {
    name: "Romit Ranjan",
    title: "Treasurer",
    linkedin: "https://www.linkedin.com/in/romit-ranjan/",
    image: "/team-images/romit.PNG",
  },
  {
    name: "Saqib Masood",
    title: "Developer Relations",
    linkedin: "https://www.linkedin.com/in/saqib-masood-0b569b1b4/",
    image: "/team-images/saqib.PNG",
  },
];

// eslint-disable-next-line react/prop-types
const TeamCard = ({ name, title, linkedin, image }) => {
  return (
    <div className="flex flex-col items-center text-white my-10">
      <img src={image} alt={name} className="rounded-full w-60 object-cover" />
      <div className="text-2xl font-bold">{title}</div>
      <a href={linkedin} target="_blank" className="text-lg hover:underline">
        <div className="text-xl ">{name}</div>
      </a>
    </div>
  );
};

const Team = () => {
  return (
    <div className="text-white p-5">
      <div className="lg:text-5xl md:text-4xl text-3xl text-center  text-white">
        Our Incredible Team
      </div>

      <TeamCard {...fac_ad} />
      {/* <TeamCard {...pres} /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
        {team.map((member) => (
          <TeamCard key={team.indexOf(member)} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
