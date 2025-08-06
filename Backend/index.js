import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import { getProductCon , postProductCon} from './controller/productCon.js'
config()

const app = express()
let PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/products", getProductCon)
app.post("/products", postProductCon)

// lets app be accessed from line/hosting
app.listen(PORT, () => {
    console.log("Link : " + `http://localhost:${PORT}`)
})