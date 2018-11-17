DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
--id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45) NOT NULL,
devoured BOOLEAN(1) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (1, "Cheeseburger", 1);