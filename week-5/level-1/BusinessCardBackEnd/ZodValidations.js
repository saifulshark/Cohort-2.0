const zod=require("zod")

const socialmedia=zod.object({
    linkedin:zod.string(),
    twitter:zod.string()
})

const postCard=zod.object({
    name:zod.string(),
    description:zod.string(),
    socialmedia: socialmedia,
    interests:zod.array(zod.string())
})
const updateCard=zod.object({
    id:zod.string(),
    description:zod.string()
}
)

const deleteCard=zod.object({
    id:zod.string()
}
)

module.exports={
    postCard:postCard,
    updateCard:updateCard,
    deleteCard:deleteCard
}