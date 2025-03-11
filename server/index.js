import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./utils/connectDb.js"

import userRoutes from "./routes/user.routes.js"
import notesRoutes from "./routes/notes.routes.js"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/user",userRoutes)
app.use("/notes",notesRoutes)

const port = process.env.PORT||3000

connectDB(process.env.CONNECT_DB)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})