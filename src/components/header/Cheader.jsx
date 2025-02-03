import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import style from './header.module.css';

export default function Cheader() {
    return (
        <div className={`${style.header} p-3`}>
            <Container>
                <div className={`${style.title} pt-1 pb-1 d-flex gap-3  align-items-center `}>
                    <div className={`${style.title1} d-flex gap-3 align-items-center`}>
                        <span className=''>home</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className={`${style.title1} d-flex gap-3 align-items-center`}>
                        <span className=''>Categories</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <div className={style.separator}></div>
                    </div>
                    <span>Category</span>
                </div>
            </Container>
        </div>

    )
}
