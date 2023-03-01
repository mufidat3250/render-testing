const express = require('express')
const app = express()


app.get('/', (request, response)=>{
    response.send(`<h3>i am ok</h3>`)
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})