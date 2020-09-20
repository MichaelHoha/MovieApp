import React from 'react'

export default function TheMovie(props) {

    const showAVG = (arr) => {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
        }
        res = res / arr.length;
        return res;

    }

    return (
        <div className='home-page'>

            <h2>{props.name}</h2>

            {/* this button sends the movie */}
            <button className='the-movie' style={{ backgroundImage: `url(${props.poster})` }}></button> <br />

            {/* this button lowers the rate */}
            <button className='rate-button' onClick={() => { props.unlikeRate(props.index) }} >Unlike</button>

            {/* this button rise the rate */}
            <button className='rate-button' onClick={() => { props.addRate(props.index) }}>+</button>
            <h4>{showAVG(props.rate)}</h4>

            <p className='movie-info'>Description: <br />{props.info}</p>

        </div>
    )
}