USE sakila;
-- SUM(), AVG(),COUNT()

SELECT customer_id FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;
SELECT COUNT(*) AS 'Cantidad de países' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 2;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUM()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- Cuál cliente realizó más rentas? 
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group BY - agrupa solo si se usa con SUM, AVG y COUNT, pero omite los valores repetidos
-- ORDER BY - ordena según la columna o función q le indiquemos ASC / DESC 
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cuál cliente gastó más? 526- 221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;

-- AVG() - regra el promedio
SELECT AVG(amount) AS promedio FROM payment;
 
-- ¿Cuál cliente gasto más en promedio? 187- 5.7 / 
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;

SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente ASC;


