import React from 'react'
import UserSidebar from '../../../components/sidebar/UserSidebar'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
            <Container fluid className="p-0 m-0">
                <Row className="">
                    <Col md={2} className="">
                        <UserSidebar />
                    </Col>
                    <Col md={8} className="">
                        <Outlet />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
