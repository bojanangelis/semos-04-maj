import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import {
  EnvelopeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PhoneArrowDownLeftIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state?.basket?.items);

  console.log(cartItems);

  return (
    <header>
      <div className="flex items-center justify-between px-10 py-2 bg-gray-100">
        <div className="flex items-center space-x-4">
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <EnvelopeIcon className="h-4 w-4 text-gray-600" /> Пиши ни
          </span>
          <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
            <PhoneArrowDownLeftIcon className="h-4 w-4 text-gray-600" /> 0800
            44400
          </span>
        </div>
        <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
          <ShoppingBagIcon className="h-4 w-4 text-gray-600" /> статус на
          нарачка
        </span>
      </div>

      <div className="p-4 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-4 w-2/3 flex-1">
          <Link to="/">
            <img
              // onClick={() => navigate('/')}
              src="https://ananas.mk/_next/static/media/ananas-logo-icon.e438d94d.svg"
              alt="ananas logo"
            />
          </Link>
          <div className="flex items-center p-4 space-x-2 bg-gray-100 rounded-full w-1/3">
            <input
              className="bg-transparent outline-none flex-1"
              placeholder="Внеси термин за пребарување"
            />
            <MagnifyingGlassIcon className="h-8 w-8 p-2 rounded-full text-white bg-orange-500" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <SignedIn>
            <span
              onClick={() => navigate('/favorites')}
              className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
            >
              <HeartIcon className="h-4 w-4 text-gray-600" /> листа на желби
            </span>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
                <UserIcon className="h-4 w-4 text-gray-600" /> Најависе
              </span>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <span
              onClick={() => navigate('/cart')}
              className="flex items-center w-100 hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs"
            >
              <ShoppingCartIcon className="h-4 w-4 text-gray-600" /> Кошничка
              {cartItems?.length > 0 && (
                <span className="bg-orange-600 px-2 py-1 rounded-full text-white">
                  {cartItems?.length}
                </span>
              )}
            </span>
          </SignedIn>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
