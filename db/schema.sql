### Schema

CREATE DATABASE WatchTheShowDB;
USE WatchTheShowDB;

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	watched BOOLEAN DEFAULT false,
	archived BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
