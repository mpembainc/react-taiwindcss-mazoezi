import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts/Layout';
import Dasboard from './pages/Dasboard';
import Products from './pages/Products';
import Product2 from './pages/Product2';

export const router = createBrowserRouter([
  { path: '/login', element: <Home /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to='dashboard' /> },
      { path: '/dashboard', element: <Dasboard /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      { path: '/products-query', element: <Product2 /> },
    ],
  },
]);
