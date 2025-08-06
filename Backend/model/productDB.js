import { pool } from '../config/db.js'

export const getProducts = async() => {
    try{
        let [row] = await pool.query("SELECT * FROM products")
        return row
    } catch(error) {
        throw new Error('Database error: ' + error.message);
    }
}

export const postProduct = async (products_id,name, description, price, discount, stock, category_id, image_url, is_new) => {
  const query = `
    INSERT INTO products 
    (products_id , name, description, price, discount, stock, category_id, image_url, is_new)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [products_id, name, description, price, discount, stock, category_id, image_url, is_new];
  await pool.query(query, values);
};
