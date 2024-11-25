DROP DATABASE IF EXISTS BaseDeDatosCelulares;
CREATE DATABASE IF NOT EXISTS BaseDeDatosCelulares;
USE BaseDeDatosCelulares;
CREATE TABLE Celulares (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    color VARCHAR(20),
    precio DECIMAL(10, 2) NOT NULL,
    capacidad almacenamiento INT,
    ram INT,
    sistema_operativo VARCHAR(30)
);
