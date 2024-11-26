DROP DATABASE IF EXISTS celulares;
CREATE DATABASE IF NOT EXISTS celulares;
USE celulares;
CREATE TABLE celulares (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    color VARCHAR(20),
    precio DECIMAL(10, 2) NOT NULL,
    capacidad_almacenamiento INT,
    ram INT,
    sistema_operativo VARCHAR(30)
);
