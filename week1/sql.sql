=================================================
SELECT * FROM `books` WHERE `Rating` >8.5;

================================================
SELECT MAX(`Rating`) FROM `books`;

================================================
SELECT COUNT(`Genre`) FROM `books` WHERE `Genre`='Fantasy';

===============================================
SELECT COUNT(`Genre`) FROM `books` WHERE `Genre`='Drama';
===============================================
SELECT COUNT(`Published_Year`) FROM `books` WHERE `Published_Year`='2018';
===============================================
SELECT MIN(`Pages`) FROM `books`;
==============================================
SELECT COUNT(*) FROM `books` WHERE `Reviews_Count`<300000;
=============================================
SELECT COUNT(*) FROM `books` WHERE `Price`>30;

===========================================
SELECT AVG(`Rating`) FROM books;
============================================
SELECT COUNT(*) FROM `books` WHERE `Language`='English';
=========================================================
SELECT Genre, COUNT(*) AS total
FROM books
GROUP BY Genre
ORDER BY total DESC
LIMIT 1;
========================================================
SELECT COUNT(*) FROM `books` WHERE `Genre` LIKE '%Adventure%';
=======================================================
SELECT COUNT(*) FROM `books` WHERE `Pages` BETWEEN 300 and 500;
=======================================================
SELECT `Published_Year`, COUNT(*) AS total
FROM books
WHERE `Published_Year` > 1950
GROUP BY `Published_Year`
ORDER BY total ASC
LIMIT 2;
===================================================
SELECT MAX(`Price`) FROM books WHERE `Genre`='Science Fiction';
=============================================================
SELECT COUNT(*) FROM books WHERE `Rating` BETWEEN 8.0 AND 8.5;
=============================================================
SELECT AVG(`Reviews_Count`) FROM books WHERE Genre LIKE '%Romance%';
=============================================================
SELECT COUNT(*) FROM `books` WHERE `Published_Year`<2000;
===========================================================
SELECT Genre, AVG(Rating) AS avg_rating
FROM books
GROUP BY Genre
ORDER BY avg_rating DESC
LIMIT 1;
======================================================
SELECT MAX(`Pages`) AS max_pages FROM books WHERE `Genre` LIKE '%Historical%'

SELECT `Title`, `Pages` FROM books WHERE `Genre` LIKE '%Historical%' ORDER BY `Pages` DESC;
================================================================








================================================================
SELECT COUNT(*) FROM `sports_events` WHERE `Date` LIKE '%2023';

===============================================================
SELECT `Attendance` 
FROM `sports_events`  
ORDER BY `sports_events`.`Attendance` DESC
LIMIT 1;
=============================================================
SELECT COUNT(*)
FROM `sports_events` 
WHERE `Sport_Type` LIKE '%Football%';
=============================================================
SELECT COUNT(*) FROM `sports_events` WHERE `Sport_Type` LIKE '%Racing%' AND `Location` IN ('USA','Monaco');



SELECT COUNT(*) AS Short_Tennis_Golf_Events
FROM sports_events
WHERE Type IN ('Tennis', 'Golf')
  AND Days_Duration < 5;

============================================================

SELECT COUNT(*)
FROM `sports_events` 
WHERE `Attendance`=0

==========================================================
SELECT MIN(`Prize_Money`)
FROM `sports_events`

========================================================
SELECT COUNT(`Prize_Money`)
FROM `sports_events`
WHERE `Prize_Money`>1000000;
======================================================
SELECT YEAR(STR_TO_DATE(Date, '%Y-%m-%d')) AS Year, COUNT(*) AS Event_Count
FROM sports_events
GROUP BY Year
ORDER BY Event_Count DESC
LIMIT 1;
=========================================================
SELECT YEAR(MIN(STR_TO_DATE(Date, '%Y-%m-%d'))) AS Earliest_Year
FROM sports_events;

=========================================================
