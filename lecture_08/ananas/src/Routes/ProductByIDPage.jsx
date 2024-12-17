import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductByIDPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/${params?.id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(params);
  return (
    <div
      key={product?.id}
      onClick={() => handleProductId(product?.id)}
      className="border bg-white relative flex flex-col items-center border-gray-400 rounded-lg w-52 p-4 h-72"
    >
      <img className="w-24 h-24 object-contain" src={product?.image} />
      <h4 className="truncate w-48 text-center">{product?.title}</h4>
      <p className="text-gray-600 text-xs">{product?.description}</p>
    </div>
  );
};

export default ProductByIDPage;
