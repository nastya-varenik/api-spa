import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Albums from './pages/Albums';
import AlbumDetail from './pages/AlbumDetail';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetail />,
      },
      {
        path: '/albums',
        element: <Albums />,
      },
      {
        path: '/albums/:id',
        element: <AlbumDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;