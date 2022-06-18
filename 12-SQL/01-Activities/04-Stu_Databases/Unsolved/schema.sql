-- Write code here or enter directly in MySQL shell --
-- DELETE SAMPLE DB
DROP DATABASE IF EXISTS sample_db;
-- check to see if it deleted
SHOW DATABASES;
-- do drop first just to make sure there is no duplicate
DROP DATABASE IF EXISTS books_db;
-- CREATE BOOKS_DB
CREATE DATABASE books_db;
-- select books_db for use
USE books_db;
-- check
SELECT DATABASE();