'use client';
import { useState } from "react"
import '../style/footer.css'

const LINKS = [
    {link: "mailto:claire.savelvioux@gmail.com", icon: "fas fa-at"},
    {link: "https://www.linkedin.com/in/claire-savel-vioux-2aa560213/", icon: "fab fa-linkedin"},
    {link: "/https://www.youtube.com/@lacreationetcaetera", icon: "fab fa-youtube"},
    {link: "https://twitter.com/astenshia_", icon:"fab fa-twitter"}
];

export default function Footer() {


    const linkElements = LINKS.map((val,i) => (
        <a href={val.link} className="icon" key={i}><i className={val.icon}></i></a>
    ))
    return (
        <footer>
            <p>
                <i className="far fa-copyright"></i>
                2023, by Claire SAVEL-VIOUX
            </p> 
            <div className="icons">
                {linkElements}        
            </div>
        </footer>
    )
}