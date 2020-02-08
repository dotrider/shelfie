CREATE TABLE inventory (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price MONEY,
    image_url TEXT
    
);