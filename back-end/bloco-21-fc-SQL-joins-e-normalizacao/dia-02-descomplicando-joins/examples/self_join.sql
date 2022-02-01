SELECT
	CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME)) AS "Nome da Pessoa Colaboradora"    
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY `Nome Gerente`
ORDER BY `Nome Gerente`;
