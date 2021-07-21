
DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE departments (
id INTEGER auto_increment NOT NULL,
department VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INTEGER auto_increment NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
dept_id INTEGER NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER auto_increment NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NOT NULL,
PRIMARY KEY (id)
);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Lisa", "Burs", 12, 34)

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Josh", "Yogi", 24, 14)

-- INSERT INTO departments (department)
-- VALUES ("Engineer")

-- INSERT INTO departments (department)
-- VALUES ("Photographer")