import { useState } from 'react'

export function PostCard(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [interests, setInterests] = useState([])
    const [linkedIn, setLinkedIn] = useState("")
    const [twitter, setTwitter] = useState("")

    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="name" onChange={(e)=>{
                setName(e.target.value)
            }}></input><br></br>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description" onChange={(e)=>{
                setDescription(e.target.value)
            }}></input><br></br>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="interests" onChange={(e)=>{
                const arr = e.target.value.split(',')
                setInterests(arr)
            }} ></input><br></br>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="LinkedIn" onChange={(e)=>{
                setLinkedIn(e.target.value)
            }} ></input><br></br>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="twitter" onChange={(e)=>{
                setTwitter(e.target.value)
            }}></input><br></br>
            <button style={{
                padding:10,
                margin:10
            }} onClick={async ()=>{
                let body=JSON.stringify({
                    name: name,
                    description:description,
                    socialmedia:{
                        linkedin: linkedIn,
                        twitter: twitter
                    },
                    interests: interests
                })
                console.log("body "+body)
                let result=await fetch("http://127.0.0.1:3000/card",{
                    method:"POST",
                    body:body,
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                let resultMain=await result.json()
                console.log("result "+JSON.stringify(resultMain))
            }}>Add the Business Card</button>

        </div>
    )
}