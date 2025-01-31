import React from 'react'
import style from './section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckArrowRight, faTrophy, faAward, faHeadset } from '@fortawesome/free-solid-svg-icons';



export default function SectionFooter() {
    return (
        <section className={`pt-5 pb-5 ${style.footer2}`}>
            <div className='container'>
                <div className="row pt-5 pb-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faTrophy} />
                        <div>
                            <h6>High Quality</h6>
                            <span>crafted from top materials</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faAward} />
                        <div>
                            <h6>Warranty Protection</h6>
                            <span>Over 2 years</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faTruckArrowRight} />
                        <div>
                            <h6>Free Shipping</h6>
                            <span>Order over 150 $</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-4 gap-lg-2 gap-md-3 gap-sm-4">
                        <FontAwesomeIcon className={`${style.icons}`} icon={faHeadset} />
                        <div>
                            <h6>24 / 7 Support</h6>
                            <span>Dedicated support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
