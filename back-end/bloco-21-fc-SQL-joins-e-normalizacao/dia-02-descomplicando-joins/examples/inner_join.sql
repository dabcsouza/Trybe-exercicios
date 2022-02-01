USE sakila;
SELECT ti.actor_id, ti.first_name, tii.film_id
FROM actor AS ti
INNER JOIN film_actor AS tii
ON ti.actor_id = tii.actor_id
ORDER BY ti.first_name;

SELECT st.first_name, st.last_name, ad.address
FROM staff st 
INNER JOIN address ad
ON st.address_id = ad.address_id;

SELECT 
	ctr.customer_id, ctr.first_name,
	ctr.email, ctr.address_id, ad.address
FROM customer ctr 
INNER JOIN address ad
ON ctr.address_id = ad.address_id
ORDER BY ctr.first_name DESC
LIMIT 100;

SELECT ad.address, COUNT(ctr.customer_id) AS QTT_CLIENT
FROM address ad
INNER JOIN customer ctr
ON ad.address_id = ctr.address_id
GROUP BY ad.address;

SELECT st.first_name NOME, st.last_name SOBRENOME,
	ROUND(AVG(py.amount), 2) PAGAMENTO_MEDIO
FROM payment py
INNER JOIN staff st
ON st.staff_id = py.staff_id
GROUP BY st.first_name, st.last_name;

SELECT ti.actor_id, ti.first_name, tii.film_id, tiii.title
FROM actor AS ti
INNER JOIN film_actor AS tii
ON ti.actor_id = tii.actor_id
INNER JOIN film AS tiii
ON tii.film_id = tiii.film_id
ORDER BY ti.first_name;




