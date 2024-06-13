export function GET(){
    return Response.json({
        email:"ahmedhashir96@gmail.com",
        name:"Hashirahmed K B"
    })
}

// How the above is done on re1ct/express
// app.get('api/user', (req, res) => {
//     res.json({
//         email:"ahmedhashir96@gmail.com",
//         name:"Hashirahmed K B"
//     })
// })