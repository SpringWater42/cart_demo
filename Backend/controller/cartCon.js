import { getCartByUserId, addToCart } from "../model/cartDB.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.query.user_id ?? 1; // Assuming user_id is passed as a query parameter 
    
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    const cart = await getCartByUserId(userId); // Function to fetch cart by user ID
    
    res.status(200).json({ cart });
  } catch (err) {
    console.error("Get cart error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addToCartCon = async (req, res) => {
  try {
    const { user_id, products_id, quantity } = req.body;

    console.log("Adding to cart:", req.body);

    if (!user_id || !products_id || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await addToCart(user_id, products_id, quantity);

    res.status(201).json({ message: "Added to cart" });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
