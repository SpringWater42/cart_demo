import { pool } from '../config/db.js'

export const getCart = async() => {
    try{
        let [row] = await pool.query("SELECT * FROM user_cart")
        return row
    } catch(error) {
        throw new Error('Database error: ' + error.message);
    }
}
export const addToCart = async (user_id, product_id, quantity) => {
  const sql = `
    INSERT INTO user_cart (user_id, product_id, quantity, added_at, updated_at)
    VALUES (?, ?, ?, NOW(), NOW())
    ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity), updated_at = NOW()
  `;
  await pool.query(sql, [user_id, product_id, quantity]);
};
