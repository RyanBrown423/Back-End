const express =require("express")
 const app = express()
 const cors = require("cors")


 app.use(cors())
 app.use(express.json())

 const PORT = 3000

app.get('/test', (req,res) => {
    console.log('test is running')
    res.send("all good")
})
app.get("/2ndRoute",( req, res) => {
    console.log("route 2 is running")
    res.send("yeeeeah")
})
app.get("/number3",(req, res) =>{
    console.log("number 3 is on me")
    res.send("It's Me")
})












 app.listen(PORT, ()=>{
console.log(`server is running on port ${PORT}`)})