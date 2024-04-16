import React from 'react'
import './Widgets.css'

import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
               
            </div>
        </div>
    )
}

export default Widgets