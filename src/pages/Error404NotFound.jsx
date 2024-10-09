import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error404NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleHomeRouting = () => {
    navigate("/");
  };

  console.error(error);
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center p-16">
        <h1 className="font-extrabold text-6xl">Oops!</h1>
        <p className="uppercase text-lg">404 - Error Page Not Found</p>
        <p className="text-sm">The page you are looking for was not found.</p>
        {/* <p className="text-sm">
          <i>{error.statusText || error.message}</i>
        </p> */}
        <button
          onClick={handleHomeRouting}
          className="uppercase bg-secondary text-white px-6 py-4 hover:opacity-90 m-8"
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
};

export default Error404NotFound;
