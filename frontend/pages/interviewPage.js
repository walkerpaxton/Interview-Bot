import React, { useState } from 'react';

export default function Home() {
    const [postContent, setPostContent] = useState('');
    const [response, setResponse] = useState('')
    const submitText = () => {
        setResponse(postContent)
        setPostContent("")
    }
    return (
    <div id = "webpage"
        style ={{
            //backgroundColor: "black",
            margin: 0,
            padding: 0,
    }}>

        <div id = "title">
            <h1 style = {{
                textAlign: "center",
                fontSize: "2rem",
                color: "white"
            }}>
            Interviewer
            </h1>
        </div>

        <div id = "responses"
            style = {{
                textAlign: "center",
                fontSize: "20px",
                margin: "10px auto 0 auto",
                width: "700px",
                height: "515px",
                borderRadius: "20px",
                boxSizing:"border-box",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                border: "4px solid darkblue",
                color: "black",
                backgroundColor: "white" 
            
        }}>
            {response}
        </div>

        <div id = "text">
            <textarea 
            style = {{
                position: "fixed",
                left: "50%",
                bottom: "50px",
                transform: "translateX(-50%)",
                borderRadius: "20px",
                padding: "10px",
                width: "680px",
                height: "50px",
                border: "4px solid darkblue",
                fontSize: "20px",
                resize: "none"
            }}
            value = {postContent}
            onChange={e => setPostContent(e.target.value)}
            onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey)
                    submitText();
                }
            }
            />
            <button
            type = "submit"
            onClick = {() => submitText()}
            style = {{
                position: "absolute",
                borderColor: "grey",
                left: "70%", 
                bottom: "60px", 
                borderRadius: "20px",
                backgroundColor: "black",
                color: "white", 
                cursor: "pointer"
            }}>
                Submit
            </button>
        </div>
    </div>
    );
}
