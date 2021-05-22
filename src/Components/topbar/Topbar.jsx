import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuopen}) {
    return (
    
        <div className={"topbar_bg " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Digital Umesh.</a>
                    <div className="itemcontainer">
                        <Person className="icon"/>
                        <span>+917503005113</span>
                    </div>
                    <div className="itemcontainer">
                        <Mail className="icon"/>
                        <span>info@umesh.work</span>
                    </div>
                </div>
              
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuopen(!menuOpen )}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
