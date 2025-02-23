import React from 'react'
import style from './section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckArrowRight, faTrophy, faAward, faHeadset } from '@fortawesome/free-solid-svg-icons';



export default function SectionFooter() {
    return (

        <section className={`pt-5 pb-5 ${style.footer2}`}>
            <div className='container'>
                <div className="row pt-5 pb-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4 flex-column align-items-center text-center">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faTrophy} />
                        <div className='mt-2'>
                            <h6>High Quality</h6>
                            <span>Crafted from top materials</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4 flex-column align-items-center text-center">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faAward} />
                        <div className='mt-2'>
                            <h6>Warranty Protection</h6>
                            <span>Over 2 years</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4 flex-column align-items-center text-center">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faTruckArrowRight} />
                        <div className='mt-2'>
                            <h6>Free Shipping</h6>
                            <span>Order over 150 $</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4 flex-column align-items-center text-center">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faHeadset} />
                        <div className='mt-2'>
                            <h6>24 / 7 Support</h6>
                            <span>Dedicated support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
