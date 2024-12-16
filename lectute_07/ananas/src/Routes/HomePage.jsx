import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleProductId = (value) => {
    navigate(`/product/${value}`);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleProductId("Elka")}
        className="px-10 rounded-sm text-white bg-orange-400"
      >
        Elka
      </button>
      <button
        onClick={() => handleProductId("Snow Board")}
        className="px-10 rounded-sm text-white bg-orange-400"
      >
        Snow Board
      </button>
    </div>
  );
};

export default HomePage;
