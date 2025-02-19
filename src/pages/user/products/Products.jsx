import React, { useState, useEffect } from 'react';
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './products.module.css';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import SectionFooter from '../../../components/user/footerSection/SectionFooter';
import Product from '../../../components/product/Product.jsx';
import ProductsSort from '../../../components/productsSort/ProductsSort.jsx';

export default function Products() {
  const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products`);
  const { data: categoriesData } = useFetch(`${import.meta.env.VITE_BURL}/categories`);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("1");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (categoryId) => {
    setCategoryFilter(categoryId);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  useEffect(() => {
    if (data && data.products && categoriesData) {
      let filtered = data.products; // استخدم البيانات الأساسية من fetch

      // تصفية المنتجات بناءً على الفئة
      if (categoryFilter) {
        filtered = filtered.filter(product => product.categoryId === categoryFilter);
      }

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

      setFilteredProducts(filtered); // تعيين المنتجات المفلترة
    }
  }, [data, categoriesData, searchTerm, categoryFilter, sortOrder]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className={`d-flex flex-column ${style.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText1}>Products</h2>
      </div>
      <ProductsSort
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        categories={categoriesData?.categories || []}
      />
      <div className="products container py-5">
        <div className="row">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      <SectionFooter />
    </div>
  );
}
