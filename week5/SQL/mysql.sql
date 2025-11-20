CREATE database courses,

CREATE TABLE studant( 
    id int PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(100), 
    IdentityNumber VARCHAR(100),
    BirthDate DATE,
    ClassId INT,
    personlId INT UNIQUE
	)

INSERT INTO studant(`id`,`fullName`,`IdentityNumber`,`BirthDate`,`ClassId`,`personlId`)
VALUES(
    1,
    'Jennifer Thomas',
    '999411611691',
    '2000/07/04',
    2,
    12
    )
INSERT INTO studant(`id`,`fullName`,`IdentityNumber`,`BirthDate`,`ClassId`,`personlId`)
VALUES(
    1,
    'Michael Clark',
    '999494918151',
    '1991/09/18',
    4,
    123
    )

CREATE TABLE lecturers(
    LecturerName VARCHAR(100),  
    Email VARCHAR(100) UNIQUE
    )

INSERT INTO lecturers(`LecturerName`,`Email`)
VALUES('John Smith','jsmith@university.edu.il')

CREATE TABLE study_hours(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    ClassId INT,
    MorningLecturerId INT, 
    AfternoonLecturerId INT
	)

INSERT INTO study_hours(`Id`,`ClassId`,`MorningLecturerId`,`AfternoonLecturerId`)
VALUES(1,13,42,38)

INSERT INTO study_hours(`Id`,`ClassId`,`MorningLecturerId`,`AfternoonLecturerId`)
VALUES(2,38,17,25)

#4 NEED TO CREAT
#5 
# SELECT `LecturerName` FROM lecturers WHERE `LecturerName` LIKE 'M%'
#6
# SELECT `fullName`,`ClassId` FROM studant ORDER BY `ClassId` ASC, `fullName` ASC;
#7
# UPDATE studant SET `fullName`='Smith James' WHERE `IdentityNumber`='999411611691'

# edit name colunem
ALTER TABLE nameTabel
CHANGE COLUMN olDnemeColumn newNameColunem dateType
# add colunem email UNIQUE
ALTER TABLE school
ADD email VARCHAR(100) UNIQUE


INSERT INTO study_hours_extended(`Id`,`ClassId`,`MorningLecturerId`,`AfternoonLecturerId`)
VALUES
()
ALTER TABLE study_hours_extended MODIFY Id int PRIMARY KEY AUTO_INCREMENT;

INSERT INTO study_hours_extended(`ClassId`,`MorningLecturerId`,`AfternoonLecturerId`) 
VALUES (38,17,25);

SELECT *
FROM customers
WHERE `city`='NYC' OR (`city`='Lyon' AND `country`='USA');

#1 #show all lecturerName
SELECT LecturerName FROM lecturers 
UNION 
SELECT LecturerName FROM lecturers_new