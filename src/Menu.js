import React from 'react'
import { NavLink } from 'react-router-dom'





export default function Navmenu() {
    return (
        
        <nav className="Navmenu">
            <ul>
                <li><NavLink exact to="/">home</NavLink></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
         
        </nav>
    )
}
