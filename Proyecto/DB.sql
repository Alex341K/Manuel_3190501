-- Si existe una base de datos con el nombre 'inventario', la elimina
DROP SCHEMA IF EXISTS `inventario`;

-- Crea la base de datos 'inventario'
CREATE SCHEMA IF NOT EXISTS `inventario` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `inventario`;

-- Crea la tabla 'productos'
CREATE TABLE `productos` (
    `id` INT(11) NOT NULL AUTO_INCREMENT, -- Llave unica
    `nombre` VARCHAR(255) NOT NULL, -- Nombre del producto
    `tipo` VARCHAR(255) NOT NULL, -- Especificar que clase de elemento es
    `cantidad` INT(11) NOT NULL, -- Cuantos productos llegaron
    `espacio` INT(11) NOT NULL, -- Cuanto espacio consumira del almacen
    `valor` FLOAT(11) NOT NULL, -- Cual es el costo del producto
    `precio` FLOAT(11) NOT NULL, -- A cuanto se vendera 
    `fecha_Recibo` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Cuando llego al almacen
    `caducidad_dias` INT(11), -- Cuantos dias aproximados tiene de vencimiento
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserción de registros
INSERT INTO `productos` (`nombre`, `tipo`, `cantidad`, `espacio`, `valor`, `precio`, `caducidad_dias`)
VALUES
    ('Manzana', 'Alimento', 10, 5, 20, 35, 25),
    ('Llantas', 'Automotriz', 4, 30, 3000, 4000, NULL),
    ('Cuadernos', 'Papeleria', 20, 5, 180, 220, NULL);
