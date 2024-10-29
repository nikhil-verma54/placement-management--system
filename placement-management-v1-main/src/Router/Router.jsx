import {
    Outlet,
    Route,
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
import ErrorPage from "../Pages/ErrorPage";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Company from "../Pages/Company";
import Contact from "../Pages/Contact";
import Privacy from "../Pages/Privacy";
import TermCondition from "../Pages/TermCondition";
import UserDashboard from "../Pages/UserDashboard";
import AdminDashboard from "../Admin/AdminDashboard";
import Logout from "../Components/Logout";
import AdminNavbar from "../Admin/AdminNavbar";
import AddCompany from "../Admin/AddCompany";
import AllCompanies from "../Admin/AllCompanies";
import UserProfile from "../Pages/UserProfile";
import ViewMoreJob from "../Components/ViewMoreJob";
import UserCompany from "../Pages/UserCompany";
import UserSettings from "../Pages/UserSettings";
import ForgotPass from "../Pages/ForgotPass";

const router = createBrowserRouter([
    // Public Routes
    {
        path: "/",
        element:
            <>
                <Navbar />
                <Home />
                <Footer />
            </>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/logout",
        element:
            <>
                <Logout />
            </>
    },
    {
        path: "/login",
        element:
            <>
                <Navbar />
                <Login />
                <Footer />
            </>
    },
    {
        path: "/forgot-password",
        element:
            <>
                <Navbar />
                <ForgotPass />
                <Footer />
            </>
    },
    {
        path: "/signup",
        element:
            <>
                <Navbar />
                <Signup />
                <Footer />
            </>,
    },
    {
        path: "/companies",
        element:
            <>
                <Navbar />
                <Company />
                <Footer />
            </>,
    },

    {
        path: "/contact",
        element:
            <>
                <Navbar />
                <Contact />
                <Footer />
            </>,
    },
    {
        path: "/privacy-policy",
        element:
            <>
                <Navbar />
                <Privacy />
                <Footer />
            </>,
    },
    {
        path: "/term-condition",
        element:
            <>
                <Navbar />
                <TermCondition />
                <Footer />
            </>,
    },
    {
        path: "/view-more-job",
        element:
            <>
                <Navbar />
                <ViewMoreJob />
                <Footer />
            </>,
    },
    // User Routes
    {
        path: "/dashboard",
        element:
            <>
                <UserDashboard />
            </>,
    },
    {
        path: "/dashboard/profile",
        element:
            <>
                <UserProfile />
            </>,
    },
    {
        path: "/dashboard/company",
        element:
            <>
                <UserCompany />
            </>,
    },
    {
        path: "/dashboard/setting",
        element:
            <>
                <UserSettings />
            </>,
    },
    // Admin Routes
    {
        path: "/admin",
        element: <>
            <AdminNavbar />
            <AdminDashboard />
        </>,
    },
    {
        path: "/admin/company",
        element: <>
            <AdminNavbar />
            <AllCompanies />
        </>,
    },
    {
        path: "/admin/add-company",
        element: <>
            <AdminNavbar />
            <AddCompany />
        </>,
    },
]);

export { router }