import React from 'react'

import webpack from '../assets/webpack.jpg'
import './AppImage.css'

function AppImage() {
    return (
        <div className="AppImage__container">
            <img className="AppImage__img" src={webpack} alt='webpack'/>
        </div>
    )
}

export default AppImage
