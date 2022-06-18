-- Write your Schema Here -- 
DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE customers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_order (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);