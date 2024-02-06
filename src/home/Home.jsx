import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind-css.svg";
import reactRouterLogo from "../assets/react-router.svg";

const Home = () => {
  return (
    <div className="flex text-center items-center gap-6 flex-col min-h-screen">
      <div className="mt-20 mb-1 flex gap-4">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src={tailwindLogo}
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://reactrouter.com/en/main"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactRouterLogo}
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1 className="text-3xl max-w-md md:text-6xl font-semibold tracking-tight">
        Vite + React
      </h1>
      <div className="text-md flex gap-2 flex-col items-center">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <br />
          Minimal Starter code for Vite + React + TailwindCSS + React Router
        </p>
        <Link
          to="/about"
          className="p-2 bg-purple-600 mt-2 rounded-md hover:opacity-80 active:scale-95"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;
