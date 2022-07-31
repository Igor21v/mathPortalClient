import { Themes } from '../pages/themes/Themes';
import { About } from '../pages/about/About';
import { Admin } from '../pages/account/admin/Admin';
import EditTheme from '../pages/themes/editTheme/EditTheme';
import VeiwTheme from '../pages/themes/viewTheme/ViewTheme';
import { Navigate } from "react-router-dom";
import Guest from '../pages/account/guest/Guest';
import Student from '../pages/account/student/Student';
import Loading from '../components/loading/Loading';

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
export const loadingRoutes = [
    {
        path: '*',
        Component: <Loading />
    },
    {
        path: '/about',
        Component: <About/>
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
