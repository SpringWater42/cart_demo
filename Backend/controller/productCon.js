import { getProducts , postProduct } from '../model/productDB.js'

export const getProductCon= async(req, res) => {
    try {
        res.json({ products: await getProducts() })
    } catch(error) {
        console.log(error)
    }
}


 export const postProductCon = async (req, res) => {
  try {
    const {
      products_id,
      name,
      description,
      price,
      discount = 0.00,
      stock = 0,
      category_id,
      image_url,
      is_new = false
    } = req.body;

    if (!name || !price || !category_id) {
      return res.status(400).json({ error: "Missing required fields: name, price, or category_id" });
    }

    await postProduct(products_id,name, description, price, discount, stock, category_id, image_url, is_new);

    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error : "Internal server error" });
  }
};

export default postProductCon;