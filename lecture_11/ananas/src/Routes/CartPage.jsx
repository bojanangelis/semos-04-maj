import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectTotal } from '../app/basketSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.basket?.items);
  const total = useSelector(selectTotal);

  return (
    <div className="flex items-start justify-between px-4 mt-10">
      <div className="space-y-4 w-3/5 ">
        {cartItems?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center justify-between px-2 bg-white py-2 rounded shadow-sm"
          >
            <img className="w-24 h-24 object-contain" src={item?.image} />
            <div>
              <h4 className="text-start">{item?.title}</h4>
              <h4 className="text-start">{item?.category}</h4>
              <h4 className="text-start text-orange-600">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item?.price)}
              </h4>
            </div>
            <button
              className="px-6 py-2 bg-orange-600 text-white rounded-sm mt-4"
              onClick={() => dispatch(removeFromBasket(item))}
            >
              Remove from cart
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white w-1/3 border border-gray-200 shadow-sm rounded h-40 p-4 text-gray-700 text-start text-sm space-y-3">
        <p className="">Преглед на нарачка ({cartItems?.length})</p>
        <p>
          Износ на нарачка:{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total)}
        </p>
        <p>Вкупни трошоци за испорака: 0</p>
        <p>Акциски заштеди: 0</p>
      </div>
    </div>
  );
};

export default CartPage;
