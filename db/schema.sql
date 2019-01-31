CREATE DATABASE bamazonDB;


CREATE TABLE products(
  item_id INTEGER(100) NOT NULL, 
  product_name VARCHAR(50) NOT NULL, 
  department_name VARCHAR(50) NOT NULL, 
  price INTEGER(10,2),
  stock_quantity INTEGER(10)
  PRIMARY KEY(item_id);
  );




  -- queries for testing

  SELECT * FROM products;