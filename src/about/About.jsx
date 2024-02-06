import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-md flex gap-2 flex-col items-center mt-32">
      About
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default About;
