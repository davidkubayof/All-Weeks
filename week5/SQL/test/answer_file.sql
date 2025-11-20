-- Student Name: DAVID KUBAYOF
-- Class: GALIL
-- ID: 325035095


-- Question 1
-- SQL:
SELECT COUNT(*) FROM imdb_top_1000_ WHERE `IMDB_Rating`>8.0;

-- Answer: 322

-- Question 2
-- SQL:
SELECT max(`IMDB_Rating`) FROM imdb_top_1000_;
-- Answer: 9.3

-- Question 3
-- SQL:
SELECT COUNT(*) FROM imdb_top_1000_ WHERE `Genre` LIKE '%Drama%';
-- Answer: 289

-- Question 4
-- SQL:
SELECT COUNT(*) FROM imdb_top_1000_ WHERE `Genre` LIKE '%Action%';
-- Answer: 172

-- Question 5
-- SQL:
SELECT COUNT(*) FROM imdb_top_1000_ WHERE `Released_Year` LIKE '%2010%';

-- Answer: 23

-- Question 6
-- SQL:
SELECT MIN(`Runtime`) FROM imdb_top_1000_;

-- Answer: 45

-- Question 7
-- SQL:
SELECT COUNT(*) FROM `imdb_top_1000_` WHERE `Meta_score`>85;


-- Answer: 249

-- Question 8
-- SQL:
SELECT COUNT(*) FROM `imdb_top_1000_`  
WHERE `Gross`>100000000;

-- Answer: 509

-- Question 9
-- SQL:
SELECT AVG(`IMDB_Rating`) FROM `imdb_top_1000_`;
-- Answer 7.94930





-- Question 10
-- SQL:
SELECT COUNT(*) 
FROM `imdb_top_1000_`  
WHERE `Certificate` LIKE '%R';



-- Answer: 146

-- Question 11
-- SQL:
SELECT `Genre` ,COUNT(*) AS total
FROM `imdb_top_1000_`  
GROUP BY `Genre`
ORDER BY total DESC
LIMIT 1;



-- Answer:289


-- Question 12
-- SQL:
SELECT COUNT(*) 
FROM `imdb_top_1000_`
WHERE `Genre` LIKE '%Adventure%' AND `Released_Year`>'2010' AND `Certificate`NOT LIKE 'PG%';
-- Answer: 14


-- Question 13
-- SQL:
SELECT COUNT(*) 
FROM imdb_top_1000_
WHERE `Runtime` BETWEEN 95 and 140;
-- Answer:669


-- Question 14
-- SQL:
SELECT `Released_Year` ,COUNT(*) 
FROM `imdb_top_1000_`  
GROUP BY `Released_Year`
ORDER BY `imdb_top_1000_`.`Released_Year` ASC
LIMIT 1;


SELECT `Released_Year` , COUNT(*) AS LISTI FROM `imdb_top_1000_` WHERE `Released_Year`>'1940' GROUP BY `Released_Year` ORDER BY `LISTI` ASC LIMIT 1;
--1943
-- Answer: 1920


-- Question 15
-- SQL:
SELECT MAX(`Gross`)
FROM imdb_top_1000_
WHERE `Genre` LIKE '%Comedy%';
-- Answer: 9600000



-- Question 16
-- SQL:
SELECT COUNT(*) FROM `imdb_top_1000_` WHERE `IMDB_Rating` BETWEEN 7.3 AND 8.1;


-- Answer: 805


-- Question 17
-- SQL:
SELECT AVG(`Meta_score`)
FROM imdb_top_1000_
WHERE `Genre` LIKE '%Thriller%';

-- Answer: 81


-- Question 18
-- SQL:
SELECT COUNT(*) FROM `imdb_top_1000_` WHERE `Released_Year`>'1980';

-- Answer: 717


-- Question 19
-- SQL:
SELECT `Genre`,AVG(`IMDB_Rating`) AS AVG_RET
FROM `imdb_top_1000_` 
GROUP BY `Genre`
ORDER BY `imdb_top_1000_`.`Genre` ASC
LIMIT 1 ;
-- Answer: Action


-- Question 20
-- SQL:
SELECT * FROM `imdb_top_1000_` WHERE `Genre` LIKE '%Horror%' ORDER BY `imdb_top_1000_`.`Runtime` DESC LIMIT 1;
-- Answer: 122


-- Question 21
-- SQL:
SELECT COUNT(`date`) FROM `disasters` WHERE `date` LIKE '%2020%';

-- Answer: 1465


-- Question 22
-- SQL:
SELECT MAX(`casualties`) 
FROM `disasters`;
-- Answer: 445


-- Question 23
-- SQL:
SELECT COUNT(*) 
FROM `disasters`
WHERE `disaster_type` LIKE '%Flood%';
-- Answer: 996


-- Question 24
-- SQL:
SELECT COUNT(*) 
FROM `disasters`
WHERE `disaster_type` LIKE '%Flood%' AND `country` IN('Brazil','India');
-- Answer: 103


-- Question 25
-- SQL:
SELECT DISTINCT `disaster_type`,`response_time_hours`, AVG(`casualties`) 
FROM `disasters` 
WHERE `disaster_type` IN ('Wildfire' ,'Hurricane') AND `response_time_hours`>10;

-- Answer: 82.8337

-- Question 26
-- SQL:
SELECT COUNT(*) 
FROM `disasters`  
WHERE `casualties`=0;
-- Answer: 27


-- Question 27
-- SQL:
SELECT * FROM `disasters` ORDER BY `disasters`.`economic_loss_usd` ASC LIMIT 1;

-- Answer: 876.16



-- Question 28
-- SQL:
SELECT `economic_loss_usd`
FROM `disasters`
WHERE `economic_loss_usd`>1000000000;
-- Answer: NOT WAS


-- Question 29
-- SQL:
SELECT `date` , COUNT(YEAR(`date`)) AS TOTAL_DISA
FROM `disasters`  
GROUP BY YEAR(`date`)  
ORDER BY `TOTAL_DISA` DESC
LIMIT 1;
-- Answer: 2023



-- Question 30
-- SQL:
SELECT `date` FROM `disasters` WHERE `severity_index`>4 AND `aid_amount_usd`>50000 ORDER BY `disasters`.`date` ASC LIMIT 1;
-- Answer: 2018


-- Question 31
-- SQL:
SELECT `disaster_type`, COUNT(*) FROM `disasters` GROUP BY `disaster_type` ORDER BY `COUNT(*)` DESC LIMIT 1;

-- Answer: Landslide



-- Question 32
-- SQL:
SELECT COUNT(`disaster_type`)
FROM `disasters`
WHERE `disaster_type` LIKE '%Storm%';
-- Answer: 1005


-- Question 33
-- SQL:
SELECT COUNT(`disaster_type`) FROM disasters WHERE casualties BETWEEN 50 AND 500;
-- Answer: 7701


-- Question 34
-- SQL:
SELECT `date` , COUNT(YEAR(`date`)) AS TOTAL_DISA
FROM `disasters`  
GROUP BY YEAR(`date`)  
ORDER BY `TOTAL_DISA` ASC
LIMIT 1;
-- Answer: 2019


-- Question 35
-- SQL:
SELECT `economic_loss_usd`
FROM `disasters`  
WHERE `disaster_type` LIKE '%Flood%'
ORDER BY `disasters`.`economic_loss_usd` DESC
LIMIT 1;

-- Answer: 21803567.75



-- Question 36
-- SQL:

-- Answer:


-- Question 37
-- SQL:
SELECT `recovery_days`,`response_time_hours`,AVG(`casualties`) 
FROM `disasters` 
WHERE `disaster_type` LIKE '%Earthquake%' 
AND `recovery_days`>40 OR `response_time_hours` BETWEEN 5 AND 15;
-- Answer: 109.6901


-- Question 38
-- SQL: in work
SELECT `economic_loss_usd`,`severity_index`
FROM `disasters`  
GROUP BY `severity_index` DESC
LIMIT 1;
-- Answer: 10922756.52


-- Question 39
-- SQL: working on it
SELECT * FROM `disasters` ORDER BY `disasters`.`response_time_hours` ASC

-- Answer:


-- Question 40
-- SQL:

-- Answer:


-- Research Section
-- SQL:

-- Answer: 
