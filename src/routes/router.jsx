import { createBrowserRouter, Navigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import { HomePage } from '../pages';
import AuthLayout from '../layouts/AuthLayout';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import Detail from '../pages/Detail';

// TODO : errorElement 추가하기
// TODO : Path 상수화하기
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <SigninPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: '*',
        element: <Navigate to="/auth" replace />,
      },
    ],
  },
  {
    path: '/detail',
    element: <Detail />,
    children: [],
  },
]);

export default router;
