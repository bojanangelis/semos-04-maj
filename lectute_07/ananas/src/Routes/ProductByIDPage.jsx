import { useParams } from "react-router-dom";

const ProductByIDPage = () => {
  const params = useParams();

  console.log(params);
  return <div>{params.id}</div>;
};

export default ProductByIDPage;
