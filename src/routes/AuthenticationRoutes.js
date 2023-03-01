import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Signin = Loadable(lazy(() => import('pages/authentication/Login')));
const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Detail = Loadable(lazy(() => import('pages/Dashboard/Detail')));
const Admin = Loadable(lazy(() => import('pages/Admin')));
const Exchange = Loadable(lazy(() => import('pages/authentication/Login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/signin',
            element: <Signin />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/detail',
            element: <Detail />
        },
        {
            path: '/admin',
            element: <Admin />
        },
        {
            path: '/exchange',
            lement: <Exchange />
        }
    ]
};

export default AuthenticationRoutes;
