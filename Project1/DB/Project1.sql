CREATE TABLE EMPLOYEE(
    E_ID INTEGER PRIMARY KEY,
    E_NAME VARCHAR2(30),
    E_MAIL VARCHAR2(50),
    E_PW VARCHAR2(20),
    E_BOSS INTEGER,
    E_ACCOUNT INTEGER,
    BOSS_ID INTEGER
);

CREATE TABLE ACCOUNTS(
    A_ID INTEGER,
    A_NUMBER INTEGER,
    A_BALANCE INTEGER,
    E_ID INTEGER
);

ALTER TABLE EMPLOYEE RENAME COLUMN E_ACCOUNT TO A_ID;

ALTER TABLE ACCOUNTS DROP COLUMN E_ID;

ALTER TABLE ACCOUNTS
ADD CONSTRAINT PK_A_ID PRIMARY KEY (A_ID);

ALTER TABLE EMPLOYEE
ADD CONSTRAINT FK_A_ID 
FOREIGN KEY (A_ID) REFERENCES ACCOUNTS(A_ID);

ALTER TABLE ACCOUNTS ADD PHOTOS BLOB;

ALTER TABLE ACCOUNTS ADD DECRIP VARCHAR2(50);

ALTER TABLE ACCOUNTS RENAME COLUMN PHOTOS TO A_PHOTOS;

ALTER TABLE ACCOUNTS RENAME COLUMN DECRIP TO A_DESCRIP;

insert into accounts
values (2, 23456, 5000, null, null);

SELECT * FROM EMPLOYEE
WHERE EMPLOYEE.E_ID = 1
ORDER BY EMPLOYEE.E_ID;

TRUNCATE TABLE EMPLOYEE;

ALTER TABLE EMPLOYEE
MODIFY E_BOSS CHAR(1);

alter table accounts modify a_balance number(10,2);

SELECT M.E_ID, M.E_NAME, m.e_mail, m.e_pw, M.E_BOSS, A.A_ID, a.a_number, a.a_balance, m.boss_id
FROM EMPLOYEE M
INNER JOIN accounts a
ON M.A_ID = A.A_ID;

select a_id, a_number, a_balance
from accounts;

commit;

alter table accounts drop column a_photos;
alter table accounts drop column a_descrip;

commit;

select a_id, a_number, a_balance
from accounts;

savepoint;

insert into employee values (2, "Lok", "lok@ork.kom", "N", null, 100);

Select * from employee;

insert into accounts values (2, 23456, 250);

delete from accounts where a_id = 2;