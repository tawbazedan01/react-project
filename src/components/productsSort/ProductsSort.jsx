import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoFilterCircleOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import Form from 'react-bootstrap/Form';
import style from './ProductsSort.module.css';

export default function ProductsSort({ onSearchChange, onFilterChange, onSortChange, categories }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("1");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearchChange(e.target.value);
    };

    const handleFilterChange = (e) => {
        setSelectedCategory(e.target.value);
        onFilterChange(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        onSortChange(e.target.value);
    };

    return (
        <div className={`${style.header} p-3`}>
            <Container>
                <Row>

                    <Col md={12} className='d-flex flex-column flex-md-row justify-content-between gap-2'>
                        <div className='d-flex flex-column flex-md-row align-items-center gap-3'>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className={style.icons2}><IoFilterCircleOutline /></div>
                                    <Form.Control
                                        as="select"
                                        value={selectedCategory}
                                        onChange={handleFilterChange}
                                    >
                                        <option value="">Filter by Category</option>
                                        {categories.map(category => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className={style.icons2}><ImSearch /></div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className={style.separator}></div>
                            </div>
                            <p className='m-0'>Sort, search, and filter products easily!</p>
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <span>Sort by</span>
                            <select value={sortOrder} onChange={handleSortChange}>
                                <option value="1">Default</option>
                                <option value="2">Newest</option>
                                <option value="3">Price: Low to High</option>
                                <option value="4">Price: High to Low</option>
                            </select>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
