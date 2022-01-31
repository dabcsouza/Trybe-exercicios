SELECT
	AVG(length) AS 'Média de duração',
	SUM(length) AS 'Total',
	MIN(length) AS 'Mínima de duração',
	MAX(length) AS 'Máxima de duração'    
FROM film;