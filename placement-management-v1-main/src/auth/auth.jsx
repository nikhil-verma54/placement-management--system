import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [courses, setCourses] = useState("");
    const authorizationToken = `Bearer ${token}`;

    const saveTokenInLocalStr = (servertoken) => {
        setToken(servertoken);
        return localStorage.setItem("token", servertoken);
    };

    // handle navlinks
    const isLoggedIn = !!token;

    // Logout Funtionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT Authentication - to get the currently data user

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    // get courses details

    const userCourse = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/course", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data.response);
                setCourses(data.response);
            }
        } catch (error) {
            console.log(`Error in Fetching Course Data: ${error}`);
        }
    };

    useEffect(() => {
        userCourse();
        userAuthentication();
        // console.log("useEffect");
    }, []);

    return (
        <AuthContext.Provider
            value={{
                saveTokenInLocalStr,
                LogoutUser,
                isLoggedIn,
                user,
                courses,
                authorizationToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of Provider");
    }
    return authContextValue;
};
