USE sakila;
SELECT * FROM sakila.film;

-- Título de películas con en el idioma que tienen
SELECT title, name FROM film, language;

-- Actores en películas francesas
 SELECT first_name, last_name FROM actor WHERE ;
 
-- Las direcciones de cada país:
SELECT address, district FROM address ORDER BY district ASC;

/*
address - city_id/ address
city - city_id / city / country_id
country - country_id / country
*/

SELECT address.address, city.city, city.country_id
FROM address INNER JOIN city ON address.city_id = city.city_id;

SELECT country.country AS Pais, 
city.city AS Ciudad,
address.address AS direccion FROM country 
INNER JOIN city ON city.country-id = country.country_id
INNER JOIN address ON addres.city_id = city.city_id;


-- Seleccionar actor y las peliculas en las que se ha involucrado + descripción de la película

-- Peli que generó más dinero 

-- Actores que hacen películas de una cierta categoría 

-- El monto de un día específico
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

-- Cuántas peliculas estan hechas en un mismo idioma? 1000 peliculas
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;
