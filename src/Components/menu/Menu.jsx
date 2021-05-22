import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen,setMenuopen}) {
const close=()=>{ setMenuopen(false)
}
    return (
        <div className={"menu_bg " +(menuOpen && "active")}>
            <ul>
                <li onClick={close}><a href="#intro">Home</a></li>
                <li onClick={close}><a href="#portfolio">Portfolio</a></li>
                <li onClick={close}><a href="#work">Work</a></li>
                <li onClick={close}><a href="#testimonial">Testimonials</a></li>
                <li onClick={close}><a href="#contact">Conatact</a></li>
                
            </ul>
        </div>
    )
}
