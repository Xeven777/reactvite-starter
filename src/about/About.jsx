import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-md flex gap-2 flex-col items-center mt-32">
      About
      <Link
        to="/"
        className="p-2 bg-purple-600 mt-2 rounded-md hover:opacity-80 active:scale-95"
      >
        Home
      </Link>
    </div>
  );
};

export default About;
