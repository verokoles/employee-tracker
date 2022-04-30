CREATE DATABASE employeeDB;
DROP DATABASE IF EXISTS employeeDB;
USE employeeDB;


CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
departmnet_id INT,
FOEIGN KEY (department_id)references department(id)
};

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id)references role(id),
FOREIGN KEY (manager_id)references employee(id)
);
