DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products
(

  item_id INT (20) NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (45) NULL,
  department_name VARCHAR
  (45) NOT NULL,
  price DECIMAL
  (10,2) NOT NULL, 
  stock_quantity INT
  (45),
  PRIMARY KEY
  (item_id)

);

  INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
  VALUES
    ("123", "watch", "luxury", 12.34, 6868),
    ("111", "shoes", "football", 11.23, 1111),
    ("222", "pants", "dance", 22.55, 2222),
    ("333", "helmut", "hockey", 33.88, 3333),
    ("444", "club", "golf", 44.66, 4444),
    ("555", "timer", "track", 55.44, 5555),
    ("666", "mask", "goalie", 66.21, 6666),
    ("777", "shorts", "tennis", 77.99, 7777),
    ("888", "wristband", "running,", 88.99, 8888),
    ("999", "ribbon", "racing", 10.10, 9999);

  SELECT *
  FROM products;

  CREATE TABLE Departments
  (
    DepartmentID INT
    AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR
    (50) NOT NULL,
    OverHeadCosts DECIMAL
    (10,2) NOT NULL,
    TotalSales DECIMAL
    (10,2) NOT NULL,
    PRIMARY KEY
    (DepartmentID));

    INSERT INTO Departments
      (DepartmentName, OverHeadCosts, TotalSales)
    VALUES
      ('a', 50000.00, 15000.00),
      ('b', 20000.00, 12000.00),
      ('c', 30000.00, 15000.00),
      ('d & e', 3000.00, 12000.00),
      ('f', 1200.00, 15000.00),
      ('g', 40000.00, 12000.00),
      ('h', 35000.00, 15000.00),
      ('j', 12000.00, 12000.00);