export function CardRendering({card}){
    return <div>
        <h1>{card.name}</h1>
        <h5>{card.desciption}</h5>
        <div>
            <h3>Interests</h3>  
        {card.interest.map((values,index)=>{
            return <p key={index}>{values}</p>
        })}
        </div>
        <button>linkedin</button>
        <button>twitter</button>
    </div>
}
