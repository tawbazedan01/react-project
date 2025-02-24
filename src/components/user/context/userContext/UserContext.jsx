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


    const updateImg = async (data) => {
        const token = localStorage.getItem('userToken');
        const formData = new FormData();

        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        } else {
            toast.error("Please select an image!");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.put(`${import.meta.env.VITE_BURL}/user/update-image`, formData, {
                headers: {
                    Authorization: `Tariq__${token}`,
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                toast.success("Image updated successfully!");

                // هنا نقوم بتحديث الصورة في الـ Context
                setUser((prevUser) => ({
                    ...prevUser,
                    image: response.data.image, // استخدم المسار الجديد للصورة من الخادم
                }));
            }
        } catch (error) {
            toast.error("Error updating image");
        } finally {
            setLoading(false);
        }
    };


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
