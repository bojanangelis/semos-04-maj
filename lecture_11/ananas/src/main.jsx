import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Routes/Layout';
import HomePage from './Routes/HomePage';
import ProductByIDPage from './Routes/ProductByIDPage';
import { ClerkProvider } from '@clerk/clerk-react';
import CartPage from './Routes/CartPage';
import FavoritesPage from './Routes/FavoritesPage';
import { Provider } from 'react-redux';
import { store } from './app/store';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductByIDPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
    </Provider>
  </StrictMode>
);
