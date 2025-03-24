import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import style from './header.module.css';
import { Link } from 'react-router-dom';




export default function Header() {
    return (

        <div className={`${style.header} p-3`}>
            <Container>
                <div className={`${style.title} pt-1 pb-1 d-flex gap-3  align-items-center `}>
                    <div className={`${style.title1} d-flex gap-3 align-items-center`}>
                        <Link to={'/home'}> <span className=''>home</span> </Link>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className={`${style.title1} d-flex gap-3 align-items-center`}>
                        <Link to={'/products'}>   <span className=''>products</span> </Link>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <div className={style.separator}></div>
                    </div>
                    <span>product details</span>
                </div>
            </Container>
        </div>
    )
}
