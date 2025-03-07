import React, { useEffect, useState } from 'react';
import Loading from '../../../components/loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../../../components/product/Product.jsx';
import Cheader from '../../../components/header/Cheader.jsx';
import ProductsSort2 from '../../../components/productsSort/ProductsSort2.jsx';

export default function ProductWithCategory() {
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("1");

    const getProducts = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BURL}/products/category/${categoryId}`);
            setProducts(data.products);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, [categoryId]); // إعادة تحميل المنتجات عند تغيير categoryId

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    const sortedAndFilteredProducts = () => {
        let filtered = [...products];

        // تصفية المنتجات بناءً على البحث
        if (searchTerm) {
            filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        // السورت
        if (sortOrder === "2") {
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // الأحدث أولاً
        } else if (sortOrder === "3") {
            filtered.sort((a, b) => a.price - b.price); // السعر من الأقل للأعلى
        } else if (sortOrder === "4") {
            filtered.sort((a, b) => b.price - a.price); // السعر من الأعلى للأقل
        }

        return filtered;
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Cheader />
            <ProductsSort2 onSearchChange={handleSearchChange} onSortChange={handleSortChange} />
            <div className="products container py-5">
                <div className="row">
                    {sortedAndFilteredProducts().map(product =>
                        <Product key={product._id} product={product} />
                    )}
                </div>
            </div>
        </div>
    );
}
