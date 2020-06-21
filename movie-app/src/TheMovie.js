import React from 'react'

export default function TheMovie(props) {

    return (
        <div className='home-page'>

            {/* this button sends the movie */}
            <h2>{props.name}</h2>
            <button className='the-movie'
                style={{ backgroundImage: `url(${props.poster})` }}></button> <br />

            {/* this button lowers the rate */}
            <button className='rate-button' onClick={() => {
                props.unlikeRate(props.index)
            }} >Unlike</button>

            {/* this button rise the rate */}
            <button className='rate-button' onClick={() => {
                props.addRate(props.index)
            }}>{props.rate}</button>

            <p className='movie-info'>{props.info}</p>


        </div>
    )
}
