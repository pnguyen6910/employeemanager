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
    ("Shipping", 20000, 3) ("Back Office", 20000, 3);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Paul", "N", 1, 1),
    ("Joseph", "P", 2, NULL),
    ("Alan", "A", 3, 1),
    ("Dominic", "A", 4, NULL),
    ("Kenneth", "K", 5, 1),
    ("Ceijay", "C", 6, NULL);