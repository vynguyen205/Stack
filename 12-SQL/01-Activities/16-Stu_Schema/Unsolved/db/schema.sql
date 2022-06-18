-- Write your schema here --
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(30) NOT NULL
)