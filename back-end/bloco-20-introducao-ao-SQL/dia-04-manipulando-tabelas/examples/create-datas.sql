USE sakila;
-- INSERT INTO staff (active, address_id, first_name, last_name, store_id, username) VALUES
-- 	(1, 259, 'Joseph', 'Cruz', 2, 'jcruz');

-- INSERT INTO staff (active, address_id, first_name, last_name, store_id, username) VALUES
-- 	(0, 312, 'Ariane', 'Texaco', 1, 'atexaco'),
-- 	(1, 312, 'Valentina', 'Ferrary', 1, 'valFerrary');

-- INSERT INTO actor (first_name, last_name)
-- 	SELECT first_name, last_name FROM staff
--     LIMIT 5;

-- INSERT INTO category (name) VALUES
-- 	('Thriller'),
--     ('Religious'),
--     ('Others');

INSERT INTO store (address_id, manager_staff_id) VALUE (250, 5);