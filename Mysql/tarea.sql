CREATE DATABASE generation;
USE generation;
CREATE TABLE coherte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL);

SELECT * FROM coherte_16;

INSERT INTO coherte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('Victor', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java'),
('Jonathan', 'Vazquez', 6, 'CDMX', 'Javascript'),
('Raúl', 'Sanchez', 4, 'Guadalajara', 'SQL'),
('Maria', 'Vargas', 7, 'Estado de Mexico', 'Java'),
('Magali', 'Quiroz', 7, 'CDMX', 'Javascript');

SELECT * FROM coherte_16;

DELETE FROM coherte_16 WHERE alumno_id = 3;

UPDATE coherte_16 SET nombre= 'Marina', apellido = 'Pardo' WHERE alumno_id = 5;

SELECT * FROM coherte_16;

SELECT nombre, apellido FROM coherte_16 ORDER BY apellido;
/* ASC - DESC */

