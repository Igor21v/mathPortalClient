import { Themes } from './сomponents/pages/themes/Themes';
import { About } from './сomponents/pages/about/About';
import { Admin } from './сomponents/pages/account/admin/Admin';
import EditTheme from './сomponents/pages/themes/editTheme/EditTheme';
import VeiwTheme from './сomponents/pages/themes/viewTheme/ViewTheme';
import { Navigate } from "react-router-dom";
import Guest from './сomponents/pages/account/guest/Guest';
import Student from './сomponents/pages/account/student/Student';

export const adminRoutes = [
    {
        path: '/account/*',
        Component: <Admin/>
    },
    {
        path: '/themes/edit/:id',
        Component: <EditTheme/>
    },
]

export const studentRoutes = [
    {
        path: '/account/*',
        Component: <Student/>
    }
]
export const publicRoutes = [
    {
        path: '/account/*',
        Component: <Guest />
    },
    {
        path: '/',
        Component: <Themes/>
    },
    {
        path: '/themes/view/:id',
        Component: <VeiwTheme/>
    },
    {
        path: '/about',
        Component: <About/>
    },
    {
        path: '*',
        Component: <Navigate to="/" />
    },
]
