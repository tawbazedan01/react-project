import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cartCount: 0,
    setCartCount: () => { },
});

const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const getCart = async () => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            setCartCount(0);
            return;
        }
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });
            setCartCount(response.data.count || 0);
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setCartCount(0);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
