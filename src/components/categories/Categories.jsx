import React from 'react'
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../../components/loading/Loading.jsx';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



export default function Categories() {
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/categories/active`);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <Container className='p-5'>
            <style>
                {`
            :root {
                --swiper-navigation-color: #B88E2F; 
            }
            `}
            </style>

            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                navigation
                loop={true}
                slidesPerView={3.3} // عدد السلايدز الظاهرة
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.categories.map(category => (
                    <SwiperSlide key={category._id}>
                        <div className="d-flex flex-column flex-md-row justify-content-center">
                            <Link to={`/categories/${category._id}`} className="w-100">
                                <img
                                    src={category.image.secure_url}
                                    width="230px"
                                    alt={category.name}
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>




    )
}
