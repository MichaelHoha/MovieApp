import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BestMovies from './BestMovies'

export default function HomePage(props) {

    return (

        // here is the home page its first best movie
        <div className='home-page'>
            {props.movie.map((element, index) => {
                if (index == 0) {
                    return (
                        <div>
                            <h2>{element.name}</h2>
                            <Link to={`/movie${element.name}`}>
                                {/* the default movie */}
                                <button className='the-movie'
                                    style={{ backgroundImage: `url(${element.poster})` }}>
                                </button> <br />

                                {/* the button that lowers the rate */}
                                <button className='rate-button' onClick={() => {
                                    props.unlikeRate(props.index)
                                }} >Unlike</button>

                                {/* the rate button */}
                                <button className='rate-button' onClick={() => {
                                    props.addRate(index)
                                }}>{element.rate}</button>
                            </Link>
                            <p className='movie-info'>{element.info}</p>
                        </div>

                    )
                }
            })}
        </div>
    )
}
