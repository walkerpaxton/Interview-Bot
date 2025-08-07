import React, { useState } from 'react';

export default function Home() {
    const [postContent, setPostContent] = useState('')
    const [response, setResponse] = useState('')
    const [fullChat, setFullChat] = useState('')

    const submitText = async (input) => {
        const question = await getInterviewQuestion("dsa");
        const newResp = response + input + ": \n" + postContent + "\n" + "interviewer:\n" + question + "\n"
        setResponse(newResp)
        const newChat = fullChat + postContent + "\n"
        setFullChat(newChat)
        setPostContent("")
        console.log(newChat)
    }


    const getInterviewQuestion = async (topic) => {
        try {
            const response = await fetch("http://localhost:8000/api/interview/question", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({topic: topic})
            });
            const data = await response.json();
            return data.question;
        } catch (error) {
            console.error('Error:', error);
            return "Error getting question";
        }
    };
    return (
    <div id = "webpage"
        style ={{
            //backgroundColor: "black",
            margin: 0,
            padding: 0,
            flexDirection: "column",
            alignItems: "center",
            display: "flex"
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
                width: "90vw",
                maxWidth: "700px",
                margin: "10px auto 0 auto",
            }}>
            <textarea
            style = {{
                width: "100%",
                fontSize: "20px",
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

        <form id = "text"
            style = {{
                width: "100%",
                maxWidth: "700px",
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem",
                position: "relative"
            }}
            onSubmit ={e => {
                e.preventDefault();
                submitText("user");
            }}
            >
            <textarea
                style = {{
                display: "flex",
                borderRadius: "20px",
                padding: "10px",
                
                height: "45px",
                border: "4px solid darkblue",
                fontSize: "15px",
                resize: "none",
                flex: 1,
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
            style = {{
                position: "absolute",
                borderColor: "grey",
                right: "15px",
                bottom: "10px",
                borderRadius: "20px",
                backgroundColor: "black",
                color: "white", 
                cursor: "pointer"
            }}>
                Submit
            </button>
        </form>
    </div>
    );
}
