import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import { DiAtom } from "react-icons/di";
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
            src="https://www.svgrepo.com/show/354259/react.svg"
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/96/tailwindcss.png"
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
            src="https://reactrouter.com/_brand/react-router-mark-color-inverted.svg"
            className="hover:scale-105 transition-all md:w-32 w-20 hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1 className="text-3xl max-w-md md:text-6xl font-semibold tracking-tight">
        Vroom+
      </h1>
      <div className="text-md flex gap-2 flex-col items-center">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <br />
          Minimal Starter code for Vite + React + TailwindCSS + React Router +
          Daisy UI
        </p>
        <Link to="/about" className="btn btn-primary">
          About <DiAtom />
        </Link>
      </div>
    </div>
  );
};

export default Home;
