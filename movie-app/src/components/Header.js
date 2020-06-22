import svcollege from '../svcollege.png';
import React from 'react'

export default function Header(props) {

    return (
        <div className='header-logo'>
            <img src={svcollege} className="App-logo" alt="logo" />
            <h2>{props.headerTitle}</h2>

        </div>

    )
}
