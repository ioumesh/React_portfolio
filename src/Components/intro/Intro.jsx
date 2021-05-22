import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import {useEffect , useRef} from 'react'

export default function Intro() {
   const textref=useRef();
    useEffect(() => {
        init(textref.current, { showCursor: true,typeSpeed:250,backSpeed:250, cursorChar: "</>",backDelay:500, strings: ['Developer', 'Designer' ,'Content Creator','Teacher'] })
        
    }, [])
    return (
        <div className="intro_bg" id="intro">
            <div className="left">
                <div className="imgbox">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, There I'm</h2>
                    <h1>Digital Umesh</h1>
                    <h3>Freelance<span ref={textref}></span></h3>
                </div>
                <a href="#portfolio"><img src="assets/down.png" alt="" /></a>


            </div>
        </div>
    )
}
