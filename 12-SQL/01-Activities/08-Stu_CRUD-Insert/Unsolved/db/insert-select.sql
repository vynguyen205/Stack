--adding new (id,name) into the biographies table
INSERT INTO biographies (id, name)
--these are the values to insert
VALUES
--left is id and write is name
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");
--select all columns and all rows from the biographies table
SELECT * FROM biographies;
