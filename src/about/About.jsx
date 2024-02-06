import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const About = () => {
  return (
    <div className="text-md flex gap-2 flex-col items-center mt-32">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Optimised for</div>
          <div className="stat-value">SEO</div>
          <div className="stat-desc">tags, og img, description, all added</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Blazing fast</div>
          <div className="stat-value text-secondary">1.1s</div>
          <div className="stat-desc text-secondary"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value">1,196</div>
          <div className="stat-desc">worldwide</div>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
        Home <FaHome />
      </Link>
    </div>
  );
};

export default About;
