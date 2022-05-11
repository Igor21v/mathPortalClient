import { Themes } from './сomponents/pages/themes/Themes';
import { About } from './сomponents/pages/about/About';
import { Admin } from './components/pages/account/admin/Admin';
import EditTheme from './components/pages/themes/editTheme/EditTheme';
import VeiwTheme from './components/pages/themes/viewTheme/ViewTheme';
import { Navigate } from "react-router-dom";

export const adminRoutes = [
    {
        path: '/',
        Component: Admin
    },
    {
        path: '/themes/edit/:id',
        Component: EditTheme
    },
]

export const studentRoutes = [
    {
        path: '/themes',
        Component: Themes
    },
    {
        path: '/themes/view/:id',
        Component: VeiwTheme
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '*',
        Component: <Navigate to="/themes" />
    },
]
