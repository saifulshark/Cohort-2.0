import React from "react";
import "./BussinessCard.css"

function BusinessCard({detail}){
    return (
        <div className={"Card"}>
            <h1 className={"item"}>{detail.name}</h1>
            <p className={"item"}>{detail.description}</p>
            <h2 className={"item"}>Interest</h2>
            <ul className={"item"}>
                {
                    detail.interests.map(interest =>{
                        return <li>{interest}</li>
                    })
                }
            </ul>
            <div id={"handles"}>
                <a href={`https://www.instagram.com/${detail.instagram}`} target = "_blank">Instagram</a>
                <a href={`https://www.twitter.com/${detail.twitter}`} target = "_blank">Twitter</a>
                <a href={`https://www.linkedin.com/in/${detail.linkedin}`} target = "_blank">LinkedIn</a>
            </div>
        </div>
    )
}

export default BusinessCard