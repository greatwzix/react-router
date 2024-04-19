import React from 'react'
import './style.css'
import Header from "../Header/Header";

const NotFound = () => {
    return(
        <>
            <Header/>
            <div className='NotFound'>
                <h1 className='NotFound__title'>Not Found Page</h1>
            </div>
        </>
    )
}

export default NotFound;