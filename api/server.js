// BUILD YOUR SERVER HERE
const express = require("express")
const generate = require("shortid")

const app = express();
app.use(express.json())

const PORT = 5678;

let bandMembers = [
    {
        id: generate(), // String, hint: use the installed `shortid` npm package to generate it
        name: "Mick Jagger",  // String, required
        bio: "The Rolling Stones", // String, required
      },
    {
        id: generate(), // String, hint: use the installed `shortid` npm package to generate it
        name: "Roger Waters",  // String, required
        bio: "Pink Floyd", // String, required
      }

]

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})

module.exports = bandMembers; // EXPORT YOUR SERVER instead of {}
