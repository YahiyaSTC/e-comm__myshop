import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/SideBar/Sidebar'

function Home() {
  return (
    <main className='homePage py-5'>
        <Container>
            <Row>
                <Col lg={3}>
                    <Sidebar />
                </Col>
                <Col lg={9}>
                    <ProductCard/>
                </Col>
            </Row>
        </Container>
    </main>
  )
}

export default Home