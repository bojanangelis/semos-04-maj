import { StarIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../app/basketSlice';

const HomePage = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

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

  const handleAddItem = (value) => {
    dispatch(addToBasket(value));
  };

  return (
    <div className="flex gap-6 flex-wrap max-w-6xl mx-auto mt-10">
      {products?.map((product) => (
        <div
          key={product?.id}
          className="border border-gray-200 shadow-lg transition-all duration-100 hover:scale-110 cursor-pointer bg-white relative flex flex-col items-center  rounded-lg w-52 p-4 h-72"
        >
          <Link
            className="flex flex-col items-center justify-center"
            to={`/product/${product?.id}`}
          >
            <img className="w-24 h-24 object-contain" src={product?.image} />
            <h4 className="truncate w-48 text-center">{product?.title}</h4>
          </Link>

          <p className="text-gray-600 text-center text-xs">
            {product?.category}
          </p>
          <div className="flex items-center">
            {Array(Math?.round(product?.rating?.rate))
              ?.fill(1)
              ?.map((_, i) => (
                // [1, 1, 1]
                // console.log(_, i, product?.title),
                <StarIcon key={i} className="h-5 text-yellow-400" />
              ))}
          </div>
          <p className="italic text-md text-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product?.price)}
          </p>
          <button
            className="px-6 py-2 bg-orange-600 text-white rounded-sm mt-4"
            onClick={() => handleAddItem(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
