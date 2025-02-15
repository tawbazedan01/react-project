import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cartCount: 0,
    setCartCount: () => { },
    subtotal: 0,
    total: 0,
    setSubtotal: () => { },
    setTotal: () => { },
});

const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const getCart = async () => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            setCartCount(0);
            setSubtotal(0);
            setTotal(0);
            return;
        }
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });

            const cartItems = response.data.products || [];

            // استخدام map لحساب مجموع السعر لكل عنصر
            const itemTotals = cartItems.map((item) => item.quantity * item.details.finalPrice);

            // استخدام reduce لجمع المبالغ للحصول على subtotal
            const newSubtotal = itemTotals.reduce((accumulator, itemTotal) => accumulator + itemTotal, 0);

            const newTotal = newSubtotal; // يمكنك إضافة رسوم إضافية مثل الضريبة أو الشحن إذا لزم الأمر

            setCartCount(response.data.count || 0);
            setSubtotal(newSubtotal);
            setTotal(newTotal);
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setCartCount(0);
            setSubtotal(0);
            setTotal(0);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, subtotal, total, setSubtotal, setTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
