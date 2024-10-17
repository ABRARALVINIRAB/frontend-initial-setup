import { Navigate, createBrowserRouter } from 'react-router-dom';
import Registration from '../pages/Registration/Registration';
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Departments from '../pages/Dashboard/Departments/Departments';
import Applications from '../pages/Dashboard/Applications/Applications';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home/>,

            },
            // {
            //     path: '/property-search-result',
            //     element: <PropertySearchResult />,

            // },
            // {
            //     path: '/details-Of-A-single-property/:id',
            //     element: <DetailsOfASingleProperty />,
            // },
           
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            // {
            //     path: '/checkout',
            //     element: <PrivateRoute>
            //         <Checkout />
            //     </PrivateRoute>,
            // },
        ],
    },
   

    {
        path: '/dashboard',
        element: <Dashboard/>
      },
    {
        path: '/departments',
        element: <Departments />,
    },
    {
        path: '/applications',
        element: <Applications />,
    },
   
    {
        path: '*',
        element: <Home />,
    },
]);

export default routes;