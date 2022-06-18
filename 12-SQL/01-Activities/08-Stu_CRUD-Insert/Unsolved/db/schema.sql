--delete books_db if it exists
DROP DATABASE IF EXISTS books_db;
--then create a database called books_db
CREATE DATABASE books_db;
--select books_db for use
USE books_db;
--then create a table in books_db called biographies
CREATE TABLE biographies (
  --id can only have interger and cannot be blank
  id INT NOT NULL,
  --characters in name column can only have 100 bytes, and cannot be blank
  name VARCHAR(100) NOT NULL
);

