'use client';
import { useEffect, useState } from 'react';
import '../style/home.css';

export default function Home() {

    const LEAVES = [
        {link: "blog.html#info", title: "A little bit of computer science", hidden : true},
        {link: "blog.html#arts", title: "Some kinds of art", hidden : true},
        {link: "blog.html#cinema", title: "Small actor show" , hidden : true},
        {link: "blog.html#book", title: "A sprinkle of reading", hidden : true},
        {link: "blog.html#plants", title: "AND LOTS OF PLANTS", hidden : true},

    ]
    const [index,setIndex] = useState(0)

    const linkElements = LEAVES.map((val,i) => (
        <div className={"feuille-link feuillelink" + (i%2 == 0 ? "right" : "left") + (i>index?' hidden ' : '')} key={i}>        
            <a href={val.link} >{val.title}</a>
        </div>
    )) 




    useEffect(()=> {
        if (index>LEAVES.length){
            return;
        }
            setTimeout(() => {
                setIndex(index + 1)
            }, 200);
    },[index, setIndex])
    return (
        <div className="home">
            <section>
                <div className="homepicture">
                    <img src="/img/feuilles.jpg" alt="Leaf picture"/>
                </div>
            </section>
            <section className="feuilles">
                {linkElements}
            </section>
            <div className="presentation" id="me">
                <h6>About Me : </h6>
                <p>Welcome to my green space! I'm Claire, 20 years old recently, and I've been keeping this blog for a few months. </p>   
                <p>Here, you can discover my various passions, my computer projects, the short films I directed and/or played, my artworks of all kinds, some reviews of the best books I've read... 
                <br/> And soon a section entirely dedicated to my plants will be up! </p>    
                <p>I'm naturally curious and multifaceted, so we are not safe from new section with each discovery I will make ^^
                <br/>This blog is still under construction and in constant evolution (a bit like me after all), so don't hesitate to come back from time to time!</p>
            </div>
        </div>
        )
    }