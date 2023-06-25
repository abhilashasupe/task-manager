const express = require("express")
const app = express()

const router  = require("./routers/routers")
const router1  = require("./routers/authrouters")
require("dotenv").config()
const connectdb = require("./connect")

app.use(express.json())
app.use("/start",router)
app.use("/auth",router1)


const start = async() => {
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log("Server is listening on port " + 3000);
        });
    } catch (error) {
        console.log(error);
    }
}

start();


// app.listen(3000,()=>{
//     console.log("server has started on port 3000")
// })