DROP DATABASE IF EXISTS node_crud;
CREATE DATABASE IF NOT EXISTS node_crud;
USE node_crud;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    pais VARCHAR(100) NOT NULL
);