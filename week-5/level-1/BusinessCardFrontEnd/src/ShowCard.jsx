import { useState } from 'react'


export function ShowCard(props){
    const [description,setDescription]=useState("")

    return (
        <div>
            {
                props.cards.map((card)=>{
                    return (
                        <div key={card._id} style={{ borderRadius:5, backgroundColor:"lightblue",  border: "2px solid black", margin:10}} >
                            <h1  style={{ margin:0,padding:0}}><b>{card.name}</b></h1>
                            <p style={{ margin:0,padding:0}}>{card.description}</p>
                            <input style={{ marginLeft:30,padding:0, backgroundColor:"lightblue"}} type="text" placeholder="Fill in to update description"  onChange={(e)=>{
                                setDescription(e.target.value)
                                
                            }}></input>

                            <h2 style={{ margin:0,padding:0}}><b>Interests</b></h2>
                            <ul style={{ margin:0,padding:0}}>
                            {card.interests.map((interest, i) => (
                                <li style={{ marginLeft:30,padding:0}}key={i}>{interest}</li>
                            ))}
                        </ul><br></br>
                        <a href={card.socialmedia.linkedin} target="_blank" style={{ marginRight:20, backgroundColor:"blue", color:"white",border: "2px solid black",}}>LinkedIn</a>
                        <a href={card.socialmedia.twitter}  target="_blank" style={{ margin:10, backgroundColor:"blue", color:"white",  border: "2px solid black",}}>Twitter</a><br></br>
                        <button  id={card._id} style={{ marginRight:20, backgroundColor:"blue", color:"white"}} onClick={async (e)=>{
                              let result=await fetch("http://localhost:3000/card",{
                                method:"PUT",
                                body: JSON.stringify({
                                    id: e.target.id,
                                    description:description
                                }),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            let mainResult=await result.json()
                            console.log("update "+mainResult)                          
                        }}>Update Card Description</button>
                        <button id={card._id} style={{ margin:10, backgroundColor:"blue", color:"white"}} onClick={async (e)=>{
                            let result=await fetch("http://localhost:3000/card",{
                                method:"DELETE",
                                body: JSON.stringify({
                                    id: e.target.id
                                }),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            let mainResult=await result.json()
                            console.log("delete "+mainResult)
                        }
                        }>Mark as Inactive card</button>
                            
                        </div>
                    )


                }
                )

            }

            
        </div>
    )
    
}