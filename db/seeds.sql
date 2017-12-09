DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Pine Apple Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Heart Attack Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Vegan Meatless Hamburger Bun With lettuce", false);
