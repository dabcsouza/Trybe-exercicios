USE sakila;

-- Exercício usando film 

-- SELECT * FROM film;
-- SELECT title, release_year, rating FROM film;
-- SELECT COUNT(*) FROM film;

-- Exercício usando actor

SELECT * FROM actor;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor
ORDER BY last_name ASC, first_name DESC;

-- Exercício usando language

SELECT * FROM language;
SELECT * FROM language LIMIT 5 OFFSET 1;

-- Final

SELECT title, release_year, rental_duration,
	rating,replacement_cost FROM film
    ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;


