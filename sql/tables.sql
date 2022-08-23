DROP DATABASE IF EXISTS temelio;

CREATE DATABASE temelio;

DROP TABLE IF EXISTS foundation CASCADE;
DROP TABLE IF EXISTS nonprofit CASCADE;

CREATE TABLE foundation
(
	email varchar(50) PRIMARY KEY
);

CREATE TABLE nonprofit
(
	email varchar(50) PRIMARY KEY,
	name varchar(50),
	address varchar(50)
);

INSERT INTO foundation(email)
VALUES
	('zane@gmail.com');