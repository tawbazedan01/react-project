import React from 'react'
import HomeHeader from '../../../components/homeComponents/homeSec1/HomeHeader.jsx';
import HomeSection2 from '../../../components/homeComponents/homeSec2/HomeSection2.jsx';
import Categories from '../.../../../../components/categories/Categories.jsx';
import ProductsH from '../../../components/products1/ProductsH.jsx';
import Slider from '../../../components/homeComponents/homeSec3/Slider.jsx';
import HomeSection4 from '../../../components/homeComponents/homeSection4/HomeSection4.jsx';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeSection2 />
      <Categories />
      <HomeSection4 />
      <ProductsH />
      <Slider />
    </div>
  )
}
