-- create table for emplpoyee names, roles, and manager(if)
-- no manager = null
USE employeeDB;

INSERT INTO department (department_name)
VALUES ('sales'), ('engineering');

INSERT INTO role
(title, salary, department_id)
VALUES
('assistant engineer', 100000, 2),
('lead engineer', 150000, 2),
('software engineer', 80000, 2),
('sales associate', 75000, 1),
('sales associate', 75000 , 1),
('head of sales', 97000, 1),
('software engineer', 80000, 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jason', 'Smith', 1, 1),
('Katie', 'Chang', 2, NULL),
('Ed', 'Kole', 3, 1),
('Monica', 'Brown', 4, 1),
('Seth', 'Gard', 5, 1),
('Timothy', 'Allen', 6, NULL),
('Chase', 'Doe', 7, 1);



-- Left + inner joins so whole table can be seen 
SELECT employee.id, employee.first_name, 
employee.last_name, 
CONCAT(manager.first_name,'', manager.last_name) AS manager
FROM employee 
LEFT JOIN employee manager ON manager.id = employee.manager_id
INNER JOIN role ON employee.role_id = role.id
INNER JOIN department ON department.id = role.department_id;

SELECT department_name FROM department;

SELECT title FROM role;