import React, { useState, useEffect } from 'react';

export default function Home() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('/slides.json')
        .then(res => res.json())
        .then(data => setSlides(data))
    }, []);

    return (
    <div id = "webpage">
        <div id = "title">
            <h1 style = {{
                textAlign: "center",
                fontSize: "4rem",
                color: "white"
            }}>
                Study Materials Page
            </h1>
        </div>
        <div id = "information"
        style ={{
            border: "2px solid white",
            borderRadius: "12px",
            maxWidth: "100%",
            margin: "20px auto",
            color: "white"
        }}>
            {slides.map((slide, idx) =>
            <div key={idx}>
                {slide.file && <h2>{slide.file}</h2>}
                <div style = {{ whiteSpace: "pre-wrap"}}>{slide.content}</div>
                </div>
            )}
        </div>
    </div>
    );
}
