import React, { useState } from 'react';

export default function Home() {
    const [postContent, setPostContent] = useState('');
    const submitText = () => {

    }
    return (
    <div id = "webpage">

        <div id = "title">
            <h1 style = {{
                textAlign: "center",
                fontSize: "4rem"
            }}>
            Interview Bot Page, Implement Later
            </h1>
        </div>

        <div id = "text">
            <textarea 
            style = {{
                position: "fixed",
                left: "50%",
                bottom: "100px",
                transform: "translateX(-50%)",
                borderRadius: "20px",
                padding: "10px",
                width: "500px",
                height: "50px",
                borderColor: "black",
                fontSize: "20px"
            }}
            value = {postContent}
            onChange={e => setPostContent(e.target.value)}
            />
            <button
            type = "submit"
            onClick = {() => submitText()}
            style = {{
                position: "absolute",
                borderColor: "grey",
                left: "64%", 
                bottom: "105px", 
                borderRadius: "20px",
                backgroundColor: "black",
                color: "white"
            }}>
                Submit
            </button>
        </div>
    </div>
    );
}
