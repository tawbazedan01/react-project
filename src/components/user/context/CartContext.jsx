import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState([]);  // بدأنا المصفوفة فارغة
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const getCart = async () => {
        const token = localStorage.getItem("userToken");
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });

            const cartItems = response.data.products || []; // إذا لم تكن هناك منتجات تعيين مصفوفة فارغة

            const itemTotals = cartItems.map((item) => item.quantity * item.details.finalPrice);
            const newSubtotal = itemTotals.reduce((accumulator, itemTotal) => accumulator + itemTotal, 0);

            const newTotal = newSubtotal; // إذا كنت تحتاج إلى حساب المجموع الكلي بشكل مختلف

            setCartCount(response.data.count || []); // تعيين قيمة `cartCount` بناءً على البيانات من السيرفر
            setSubtotal(newSubtotal);
            setTotal(newTotal);
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setCartCount([]); // تعيين مصفوفة فارغة في حالة الخطأ
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
