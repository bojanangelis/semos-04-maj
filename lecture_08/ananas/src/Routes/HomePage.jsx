import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(products);

  const handleProductId = (value) => {
    navigate(`/product/${value}`);
  };

  return (
    <div className="flex gap-6 flex-wrap">
      {products?.map((product) => (
        <div
          key={product?.id}
          onClick={() => handleProductId(product?.id)}
          className="border bg-white relative flex flex-col items-center border-gray-400 rounded-lg w-52 p-4 h-72"
        >
          <img className="w-24 h-24 object-contain" src={product?.image} />
          <h4 className="truncate w-48 text-center">{product?.title}</h4>
          <p className="text-gray-600 text-xs">{product?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
