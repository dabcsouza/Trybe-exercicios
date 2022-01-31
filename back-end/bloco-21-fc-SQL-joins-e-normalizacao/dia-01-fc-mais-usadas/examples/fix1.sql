SELECT UCASE('trybe') AS upercase;

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_lENGTH('Uma frase qualquer') AS 'char in phrase';

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas',
	CHAR_lENGTH('A linguagem  '), CHAR_LENGTH('JavaScript'));

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL') AS Endereço;