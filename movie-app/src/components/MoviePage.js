import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {

    

    return (
        <div className='home-page'>
            <div className='top-movie'>

                {/* {props.selectValid.map((element) => {
                    return (
                            <div className='top-movie'>
                                <button className='top-movies-button'
                                    style={{ backgroundImage: `url(${element.poster})` }}>
                                    {element.name}</button>
                            </div>
                    )
                })} */}
            </div>

        </div>
    )
}


// <Link to={`/film${element.name}`}>
// </Link>