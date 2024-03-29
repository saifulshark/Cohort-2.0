const express = require("express")
const rootRouter = require("./api_v1/root_router")

const app = express()
const PORT = env("PORT")

app.use(rootRouter);

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
});