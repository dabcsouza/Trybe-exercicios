SELECT UCASE('Oi, eu sou uma string');

SELECT LCASE(UCASE('oI, eU sOU uM tEsTe'));

SELECT REPLACE('Oi, eu sou uma string de teste', 
	'uma string de teste', 'uma substituição');
    
SELECT LEFT('Estou Selecionando os primeiros 5 caracteres', 5);
SELECT RIGHT('Estou Selecionando os últimos 10 caracteres', 10);

SELECT LEFT('Estou eliminando os últimos 5 caracteres',
 CHAR_LENGTH('Estou eliminando os últimos 5 caracteres') - 5);
SELECT RIGHT('Estou eliminando os 10 primeiros caracteres',
	CHAR_LENGTH('Estou eliminando os 10 primeiros caracteres') - 10);
    
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT LCASE(title) FROM film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'SCHOOL') FROM film LIMIT 10;
SELECT REPLACE(LEFT(title, 3), 'ALI', 'EU AQUI') FROM film LIMIT 20;
SELECT CHAR_LENGTH(title) AS 'quantidade de caracteres' FROM film;



