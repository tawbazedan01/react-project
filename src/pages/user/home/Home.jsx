import React from 'react'
import HomeHeader from '../../../components/homeComponents/homeSec1/HomeHeader.jsx';
import HomeSection2 from '../../../components/homeComponents/homeSec2/HomeSection2.jsx';
import Categories from '../.../../../../components/categories/Categories.jsx';


export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeSection2 />
      <Categories />
    </div>
  )
}
