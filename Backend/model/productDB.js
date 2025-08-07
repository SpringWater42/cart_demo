import { pool } from '../config/db.js'

export const getProducts = async() => {
    try{
        let [row] = await pool.query("SELECT * FROM products")
        return row
    } catch(error) {
        throw new Error('Database error: ' + error.message);
    }
}

export const postProduct = async (products_id, name, description, price, discount, stock, category_id, image_url, is_new) => {
  const query = `
    INSERT INTO products 
    (products_id , name, description, price, discount, stock, category_id, image_url, is_new)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [products_id, name, description, price, discount, stock, category_id, image_url, is_new];
  await pool.query(query, values);
};

export const deleteProduct = async (products_id) => {
  const query = ` DELETE FROM products WHERE products_id = ? `;
  const values = [products_id];
  await pool.query(query, values);

  return { message: "Product deleted successfully" };
};

export const updateProduct = async (products_id, name, description, price, discount, stock, category_id, image_url, is_new) => {
  const query = `
    UPDATE products 
    SET name = ?, description = ?, price = ?, discount = ?, stock = ?, category_id = ?, image_url = ?, is_new = ?
    WHERE products_id = ?
  `;
  const values = [name, description, price, discount, stock, category_id, image_url, is_new, products_id];
  await pool.query(query, values);
};