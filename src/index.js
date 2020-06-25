const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT

// app.use configurate our server
app.use(express.json()) // automatically parse json to object
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server listen on port ' + port)
})