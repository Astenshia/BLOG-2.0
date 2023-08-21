'use client';
import { useState } from "react"
import '../style/header.css'

const PAGES = [
    {link: "/", title: "HOME"},
    {link: "/#me", title: "ME"},
    {link: "/inspi", title: "INSPI"},
    {link: "/blog", title: "BLOG"},
];

export default function Header() {
    const [activePage, changeActivePage] = useState(0);

    const linkElements = PAGES.map((val,i) => (
        <a href={val.link} key={i} className={i == activePage ? "active" : ""} onClick={() => changeActivePage(i)}>{val.title}</a>
    ))
    return (
        <nav>
            <h1>Astenshia</h1>
            <div className="onglets">
                {linkElements}        
            </div>
        </nav>
    )
}