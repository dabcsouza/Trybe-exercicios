USE sakila;
SELECT * FROM customer
WHERE
	email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
    
SELECT * FROM customer
	WHERE active = FALSE
	AND store_id = 2
    AND first_name <> 'KENNETH'
    ORDER BY first_name ASC;
    
