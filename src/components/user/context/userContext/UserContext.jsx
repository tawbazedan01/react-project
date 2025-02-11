import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const token = localStorage.getItem('userToken');

        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/user/profile`,
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            );
            setUser(response.data.user);
        } catch (error) {
            console.log("error fetching user data", error);
            setUser(null);
        } finally {
            setLoading(false);
        }

    }


    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider