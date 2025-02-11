import React from 'react'
import UserSidebar from '../../../components/sidebar/UserSidebar'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
            <Container fluid className='p-0'>
                <Row>
                    <Col md={4}>
                        <UserSidebar />
                    </Col>

                    <Col md={8}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
