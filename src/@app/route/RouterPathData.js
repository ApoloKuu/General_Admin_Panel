import { lazy } from "react"

const loginPage = lazy(() => import('../pages/auth/LoginPage'));
const logoutPage = lazy(() => import('../pages/auth/LogoutPage'));

export const auth = [
    {
        page: loginPage,
        url: '/'
    },
    {
        page: logoutPage,
        url: 'logout'
    }
];

const dashboardPage = lazy(() => import('../pages/DashBoardPage'));

export const page = [
    {
        page: dashboardPage,
        url: 'dashboard'
    }
];