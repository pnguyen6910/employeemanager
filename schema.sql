drop database if exists employees;
create database employees;
use employees;
create table department (
    id int unsinged auto_increment primary key,
    name varchar(30) unique NOT NULL
);
create table role (
    id int unsigned auto_increment primary key,
    title varchar(30) UNIQUE not NULL,
    salary decimal unsigned not null,
    department_id int unsigned not null,
    index dep_ind (department_id),
    constraint fl_department forigen key (department_id) references department(id) on delete cascade
);
create table employee (
    id int unsigned auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int unsigned not null,
    index role_ind (role_id) constraint fk_role forigen key (role_id) references role(id) on delete cascade,
    manager_id int unsigned,
    index man_ind (manager_id),
    constraint fk_manager forigen key (manager_id) references employee(id) on delete
    set null
)