-- Add your code below and execute file in MySQL Shell --

-- select everything from fav book table
SELECT * FROM favorite_books

JOIN book_prices ON favorite_books.book_price = book_prices.id;