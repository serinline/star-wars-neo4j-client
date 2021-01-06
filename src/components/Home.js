import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import logo from "../images/1280px-Star_Wars_Logo.svg (1).png";

import "./Home.css"

function Home() {
    const intro = useRef();
    const title = useRef();
    const content = useRef();

    useEffect(() => {
        let tl = new gsap.timeline();

        tl.to(intro.current, {
            opacity: 1,
            delay: 1,
            duration: 4.5
        })
            .to(intro.current, {
                opacity: 0,
                duration: 1.5,
            })
            .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
            .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
            .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
            .to(content.current, { top: "-170%", duration: 200 });
    }, []);

    return (
        <div className="container">
            <section className="intro" ref={intro}>
                <p>
                    A long time ago, in a galaxy far,
                    <br /> far away....
                </p>
            </section>
            <section className="title" ref={title}>
                <img src={logo} alt="Star Wars" />
            </section>
            <section className="crawl">
                <div className="content" ref={content}>
                    <h1 className="episode-number">Episode X</h1>
                    <h2 className="episode-title">THE PROJECT IS HERE</h2>
                    <p>
                        After a lot of classes we had, we are finally at the end of studies.
                    </p>
                    <p>
                        The last thing to do before the diploma exam is Neo4j project.
                    </p>
                    <p>
                        After hours of coding finally it's awake!
                    </p>
                    <p>
                        All content have been done by Anna Malik.
                    </p>

                </div>
            </section>
        </div>
    );
}

export default Home;
