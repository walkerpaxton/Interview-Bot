import React, { useState } from 'react';

export default function Home() {
    const [postContent, setPostContent] = useState('')
    const [response, setResponse] = useState('')
    const [fullChat, setFullChat] = useState('')
    const submitText = (input) => {
        const newResp = response + input + ": \n" + postContent + "\n"
        setResponse(newResp)
        const newChat = fullChat + postContent + "\n"
        setFullChat(newChat)
        setPostContent("")
        console.log(newChat)
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

        <div id = "responses">
        <textarea
            style = {{
                position: "fixed",
                left: "25%",
                textAlign: "left",
                fontSize: "20px",
                margin: "10px auto 0 auto",
                width: "700px",
                height: "500px",
                borderRadius: "20px",
                boxSizing:"border-box",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                border: "4px solid darkblue",
                color: "black",
                backgroundColor: "white",
                paddingLeft: "10px",
                resize: "none"
        }}
            value = {response}
            readOnly
            />
        </div>

        <div id = "text">
            <textarea 
            style = {{
                position: "fixed",
                left: "25%",
                bottom: "30px",
                borderRadius: "20px",
                padding: "10px",
                width: "700px",
                height: "45px",
                border: "4px solid darkblue",
                fontSize: "15px",
                resize: "none",
            }}
            value = {postContent}
            onChange={e => setPostContent(e.target.value)}
            onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    submitText("user");
                }
                }
            }
            />
            <button
            type = "submit"
            onClick = {() => submitText("user")}
            style = {{
                position: "fixed",
                borderColor: "grey",
                left: "70%", 
                bottom: "47px", 
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
