import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import { getProductCon , postProductCon , deleteProductCon , updateProductCon} from './controller/productCon.js'
import { addToCartCon } from '../controller/cartCon.js';
import cartRoutes from './routes/cart.js'; // <-- Add this import

config()

const app = express()
let PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/products", getProductCon)
app.post("/products", postProductCon)
app.delete("/products", deleteProductCon)
app.patch("/products", updateProductCon)

app.post('/add', addToCartCon);
app.use('/api/cart', cartRoutes); // <-- Add this line to register the cart routes

// lets app be accessed from line/hosting
app.listen(PORT, () => {
    console.log("Link : " + `http://localhost:${PORT}`)
})