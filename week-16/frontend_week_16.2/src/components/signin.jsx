import { useState } from "react";
BACKEND_URL = 'http://localhost:3000';
import axios from 'axios';

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <input onChange={(e) => {
                setUsername(e.target.value);
            }} type="text" placeholder="Username"/>
            <input onChange={(e) => {
                setPassword(e.target.value);
            }} type="text" placeholder="Password"/>
            <button onClick={async () => {
                await axios.post(`${BACKEND_URL}/signin`,{
                    username,
                    password
                },{
                    withCredentials: true,
                });
                alert("You're logged in");
            }}></button>
        </>
    )
}