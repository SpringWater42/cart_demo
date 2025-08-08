import { addToCart } from '../model/cartDB.js';

export const addToCartCon = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    if (!user_id || !product_id || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    await addToCart(user_id, product_id, quantity);
    res.status(201).json({ message: "Added to cart" });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
