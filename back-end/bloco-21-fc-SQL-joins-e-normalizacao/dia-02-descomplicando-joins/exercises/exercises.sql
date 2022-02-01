USE Pixar;

SELECT title, domestic_sales, international_sales
FROM Movies M
INNER JOIN BoxOffice B
ON  B.movie_id = M.id;

USE Pixar;
SELECT title, domestic_sales, international_sales
FROM Movies M
INNER JOIN BoxOffice B
ON  B.movie_id = M.id AND domestic_sales > international_sales;

SELECT title, rating
FROM Movies M
INNER JOIN BoxOffice B
ON  B.movie_id = M.id
ORDER BY rating DESC;

SELECT name, title  FROM Theater t
LEFT JOIN Movies m
ON t.id = theater_id
ORDER BY name;

SELECT title, name  FROM Theater t
RIGHT JOIN Movies m
ON t.id = theater_id
ORDER BY name;

# bonus
SELECT * FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id AND rating > 8
ORDER BY rating DESC;