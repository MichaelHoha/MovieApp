import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BestMovies(props) {

    return (
        <div className='best-movies'>
            {/* here is the best three movies from the list */}

            {props.movie.map((element, index) => {
                if (element.rate.length == 5) {

                    return (
                        /// it return a button with a link route you need
                        <Link to={`movie${element.name}`}>
                            <button className='movies-button'
                                style={{ backgroundImage: `url(${element.poster})` }}>
                                </button>
                        </Link>
                    )
                }
            })}

        </div>
    )
}
