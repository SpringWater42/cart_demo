import { pool } from '../config/db.js'

export const getCartByUserId = async (userId) => {
  const sql = `
    SELECT * FROM user_cart_products_view WHERE user_id = ?
  `;
  
  const [rows] = await pool.query(sql, [userId]);
  
  return rows;
}

export const addToCart = async (user_id, product_id, quantity) => {
  const sql = `
    INSERT INTO user_cart (user_id, product_id, quantity, added_at, updated_at)
    VALUES (?, ?, ?, NOW(), NOW())
    ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity), updated_at = NOW()
  `;

  await pool.query(sql, [user_id, product_id, quantity]);
};
