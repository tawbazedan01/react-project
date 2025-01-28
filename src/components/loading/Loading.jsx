import React from 'react'

export default function Loading() {
    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}
