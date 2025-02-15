import React from 'react';
import SectionFooter from '../../../components/user/footerSection/SectionFooter.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import style from './checkout.module.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function Checkout() {
    return (
        <div>
            <div className={` d-flex flex-column ${style.bgImage1}`}>
                <img src={logo2} alt="logo" />
                <h2 className={style.overlayText1}>Checkout</h2>
            </div>

            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
            <SectionFooter />
        </div>
    )
}
