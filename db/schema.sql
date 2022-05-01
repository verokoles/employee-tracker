DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

-- //department table
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- roles of employees tables
CREATE TABLE role (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
departmnet_id INTEGER,
FOREIGN KEY (department_id) references department(id) ON DELETE CASCADE
};

-- employee names
CREATE TABLE employee (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
FOREIGN KEY (job_title_id) references job_title(id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) references employee(id) ON DELETE SET NULL
);
