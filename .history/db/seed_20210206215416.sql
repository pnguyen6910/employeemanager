use employees;
insert into department (name)
values ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");
insert into role (title, salary, department_id)
values ("General Manager", 30000, 1),
    ("Sales Tech", 15000, 1),
    ("Bombsicle", 40000, 2),
    ("Mixologist", 30000, 2),
    ("Shipping", 20000, 3),
    ("Back Office", 20000, 3);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Jerry", "Noles", 1, 1),
    ("Drake", "Bell", 2, NULL),
    ("Ned", "Flanders", 3, 1),
    ("Timmy", "Turner", 4, NULL),
    ("Brock", "Samson", 5, 1),
    ("Rusty", "Venture", 6, NULL);