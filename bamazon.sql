

DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  item_id VARCHAR
  (45) NOT NULL,
  product_name VARCHAR
  (45) NULL,
  department_name VARCHAR
  (45) NOT NULL,
  price DECIMAL
  (x,2) NOT NULL, 
  stock_quantity INT
  (45),
  PRIMARY KEY
  (id)
);



  Select *
  FROM products;

  INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
  VALUES
    (110, "sweatbands", "soccer", 10.55, 01),
    (210, "gloves", "basketball", 20.25, 22),
    (330, "gatorade", "football", 30.55, 33),
    (440, "jersey", "hockey", 40.44, 44),
    (550, "kleats", "football", 50.55, 55),
    (600, "pants", "soccer", 60.55, 66),
    (725, "bats", "baseball", 70.25, 77),
    (850, "clubs", "baseball", 80.45, 88),
    (905, "footballs", "hockey", 90.45, 99),
    (1010, "hi-tops", "basketball", 100.99, 10)



  INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)

  VALUES
    ("123", "watch", "luxury", 12.34, 6868)  
