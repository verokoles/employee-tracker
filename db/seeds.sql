-- create table for emplpoyee names, roles, and manager(if)
-- no manager = null
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Jason', 'Smith', 1, 1), 
('Katie', 'Chang', 2, 3), 
('Ed', 'Kole', 3, null), 
('Kelsey', 'Tova', 4, 3), 
('Monica', 'Brown', 5, null), 
('Seth', 'Gard', 6, null), 
('Timothy', 'Allen', 7, 5), 
('Chase', 'Doe', 3, 1);

-- table for employee roles
INSERT INTO employee_Role(title, salary, department_id)
VALUES 
('Sales director', 105000, 1), 
('Sales associate', 75000, 1), 
('Head engineer', 165000, 2), 
('Software engineer', 125000, 2), 
('Accountant', 100000, 3), 
('Head lawyer', 200000, 4), 
('Lawyer', 187000, 4);

-- table for employee dept
INSERT INTO employee_Dept(dept_name)
VALUES 
-- dept 1 sales
('Sales'),
-- depst 2  engineering
('Engineering'),
-- dept 3 finance
('Finance'),
-- dept 4 law
('Legal');

-- Left + inner joins so whole table can be seen 
SELECT employee.id, employee.first_name, 
employee.last_name, employee_role.title, 
employee_dept.dept_name, employee_role.salary, 
CONCAT(manager.first_name,'', manager.last_name) AS manager
FROM employee 
LEFT JOIN employee manager ON manager.id = employee.manager_id
INNER JOIN employee_Role ON employee.role_id = employee_Role.id
INNER JOIN employee_Dept ON employee_Dept.id = employee_Role.department_id;

SELECT dept_name FROM employee_Dept;

SELECT title FROM employee_Role