USE sakila;

-- Usando WHERE

SELECT * FROM customer
WHERE
	email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
    
SELECT * FROM customer
	WHERE active = FALSE
	AND store_id = 2
    AND first_name <> 'KENNETH'
    ORDER BY first_name ASC;
    
SELECT
	title AS 'título',
    description AS 'Descrição',
    release_year AS 'Ano de Lançamento',
    replacement_cost AS 'custo de substituição'
FROM film
WHERE
	rating <> 'NC-17' AND
    replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT count(active) AS 'Clientes Ativos' FROM customer 
WHERE active = TRUE
GROUP BY active;

SELECT * FROM customer
WHERE NOT active;

SELECT * FROM film
WHERE 
	rating = 'NC-17'
ORDER BY
	rental_rate ASC,
    title ASC
LIMIT 50;

-- Usando LIKE 

SELECT * FROM film
	WHERE title LIKE '%ace%';

SELECT * FROM film
	WHERE description LIKE '%china';

SELECT * FROM film
	WHERE description LIKE '%girl%'
    AND title LIKE '%lord';

SELECT * FROM film
	WHERE description LIKE '%Documentary%'
    AND title LIKE '___gon%';

SELECT * FROM film
	WHERE title LIKE '%academy'
    OR title LIKE 'mosquito%'; 

SELECT COUNT(*) FROM film
	WHERE description LIKE '%monkey%'
    AND description LIKE '%sumo%';



SELECT title, rental_duration, rating FROM film
WHERE rating IN('R', 'PG-13')
AND rental_duration = 6;

SELECT * FROM film
WHERE title 
IN('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AIRPLANE SIERRA');

USE sakila;
SELECT * FROM actor
WHERE first_name BETWEEN 'B' AND 'E%'
ORDER BY first_name;

