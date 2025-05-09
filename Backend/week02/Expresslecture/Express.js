const express = require('express')
const app = express()
app.use(express.json())//allows access to the request.body
const uuid = require("uuid")

let db = [
    { id: "1", task: "test" },
    { id: "2", task: "eat" },
    { id: "3", task: "sleep" },
    { id: "4", task: "walk" }
]
app.get("/get", (req,res)=> {
    console.log("get route hit",db)
    res.json(db)
}) 
app.get("/query", (req, res) => {
    console.log("query route hit", db, req.query)
    res.send("Hello Pokemon", db, req.query)
})


app.post("/post", (req,res) => {
    console.log("POST route hit",req.body);
    // db.push(req.body.todo);
const newTodo = {
    id:uuid.v4(),
    task:req.body.todo
}
db.push(newTodo)


res.json({msg : "todo created", todo:newTodo,db})
})

app.delete("/delete/:id", (req, res) => {
    console.log("Delete route Hit",req.params)
console.log("filter",db.filter((item) => item.id !== req.params.id))
db=db.filter((item) => item.id !== req.params.id)
res.json(db)
})

app.put("/put/:id", (req, res) => {
    console.log("Put route hit","params:", req.params.id,"req.body:",req.body)
})
app.listen(3000, () => {
    console.log("server is running")
})

