import React, { useState } from 'react';
import {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();
    const handleClick = (path) => {
        //implement to take you to different page
        router.push(path);
    }
    return (
    <div id = "website">
        <div id = "title">
        <h1 style = {{
            textAlign : "center",
            fontSize: "4rem",
            color: "white"
        }}>
        CS Interview Prepper</h1>
        </div>

        <div id = "button1"
        style = {{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"   

       }}>

        <button 
        type = "interview" 
        onClick = {() => handleClick('/interviewPage')}
        style = {{
            padding: "48px 96px",
            fontSize: "2.75rem",
            borderRadius: "60px",
            backgroundColor: "darkblue",
            color: "white",
            border: "white",
            cursor: "pointer"
        }}>
        
        Interview Practice
        </button>

        <button 
        type = "studyPrep" 
        onClick = {() => handleClick('/studyPrepPage')}
        style = {{
            padding: "48px 96px",
            fontSize: "2.75rem",
            borderRadius: "60px",
            backgroundColor: "darkblue",
            color: "white",
            border: "white",
            cursor: "pointer"
        }}>
        
        Study Materials
        </button>
        </div>
    </div>
    );
};