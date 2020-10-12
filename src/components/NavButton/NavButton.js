import React from 'react'
import {Link} from "react-router-dom"
import "./NavButton.scss"

function NavButton(props) {
    return (
        <div className="navbutton-container">
            <Link to={props.link} className="navButton-link">
                <span>{props.text}</span>
            </Link>
        </div>
    )
}

export default NavButton

