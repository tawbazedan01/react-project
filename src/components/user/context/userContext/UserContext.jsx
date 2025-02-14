import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const UserContext = createContext({
    user: null,
    loading: true,
    setUser: () => { },
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const token = localStorage.getItem("userToken");

        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BURL}/user/profile`,
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    },
                }
            );
            setUser(response.data.user);
        } catch (error) {
            console.log("Error fetching user data:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{ user, loading, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
