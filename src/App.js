import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import InputSelection from './InputSelection';
import Dashboard from './Dashboard';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Landing />
        },
        {
            path: '/dashboard-usa',
            element: <Dashboard country="USA" />
        },
        {
            path: '/dashboard-ind',
            element: <Dashboard country="IND" />
        },
        {
            path: '/inputselect',
            element: <InputSelection />
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
