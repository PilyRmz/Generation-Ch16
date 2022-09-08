USE tienda;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (1, '2022-09-07', 100, 1);


-- Inner Join
-- Explícita
SELECT * FROM clientes INNER JOIN compra 
ON clientes.cliente_id = compra.cliente_id;

SELECT clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra FROM clientes INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Unión implícita
SELECT * FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEDT JOIN 
SELECT * FROM clientes LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- RIGHT JOIN
SELECT * FROM clientes RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;
