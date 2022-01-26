USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE '%e%';

SELECT name FROM Projects
WHERE Name LIKE 'A%'
ORDER BY Name;

SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Code;

SELECT * FROM Projects
WHERE Hours > 500
ORDER BY Hours;

SELECT * FROM Projects
WHERE Hours BETWEEN 250 and 800
ORDER BY Hours;

SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%'
ORDER BY Code;

SELECT Name FROM Projects
WHERE code LIKE '%H%';
