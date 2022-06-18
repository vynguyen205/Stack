CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- Use inventory_db --
USE inventory_db;
-- USE = defining the database you are currently working with

-- See database in use --
SELECT DATABASE();
-- this is to see which database you are currently working with