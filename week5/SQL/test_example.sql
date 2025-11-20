USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE
    `Rating` > "8.5";
==========================================
USE `csv_db 9`;
SELECT
    MAX(`Rating`)
FROM
    `books`
===========================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE Genre LIKE "Fantasy";
============================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE Genre LIKE "Drama";
==============================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE Published_Year LIKE "2018";
===============================================
USE `csv_db 9`;
SELECT
    MIN(Pages)
FROM
    `books`
================================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE  Reviews_Count > "300000";
==================================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE  Price > "30";
===================================================
USE `csv_db 9`;
SELECT
    AVG(Rating)
FROM
    `books`
==================================================
USE `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE `Language` LIKE "English";
===================================================
USE
    `csv_db 9`;
SELECT
    `Genre`,
    COUNT(*) AS max_genre
FROM
    `books`
GROUP BY
    `Genre`
ORDER BY
    max_genre
DESC
LIMIT 1;
----------

Genre
max_genre
Fantasy Adventure
69

=======================================================
USE
    `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE
    Genre LIKE "Adventure";
------------------------
COUNT(*)
8
============================================================
USE
    `csv_db 9`;
SELECT
    COUNT(*)
FROM
    `books`
WHERE
    Pages BETWEEN 300 AND 500;
----------------------------------
COUNT(*)
117
==================================================

SELECT
    Published_Year,
    COUNT(*) AS p_y
FROM
    `books`
WHERE
    Published_Year > "1950"
GROUP BY
    Published_Year
ORDER BY
    p_y
==========================================================
SELECT
    Price,
    COUNT(*) AS p_y
FROM
    `books`
WHERE
    `Genre` LIKE "Science Fiction"
GROUP BY
    Price
ORDER BY
    p_y
LIMIT 1
==========================================================
SELECT
    COUNT(*)
FROM
    `books`
WHERE
    `Rating` BETWEEN "8.0" AND "8.5"

COUNT(*)
114
==========================================================
SELECT
    AVG(Reviews_Count)
FROM
    `books`
WHERE
    `Genre` LIKE "%Romance%";
    -----------------
    AVG(Reviews_Count)
314148.1481
===========================================================
SELECT
    COUNT(*)
FROM
    `books`
WHERE
    Published_Year > "2000";
    -----------------------
    COUNT(*)
151
=============================================================
SELECT
    `Genre`,COUNT(*), AVG( Rating) AS avg_r
FROM
    `books`
GROUP BY `Genre`
ORDER BY avg_r DESC LIMIT 1;
---------------------
Romance Fantasy
4
7.65000
======================================================
SELECT
    MAX(Pages)
FROM
    `books`
WHERE `Genre` LIKE  "%Historical%";
---------------------
1463
===========================================================
===========================================================
===========================================================
SELECT
    COUNT(*)
FROM
    sports_events
WHERE
    YEAR(STR_TO_DATE(DATE, "%m/%d/%Y")) = 2023;
    ---------------------------
    COUNT(*)
134
===========================================================
SELECT
    MAX(Attendance)
FROM
    sports_events
---------------------
1000000
==============================================================
SELECT
    COUNT(*)
FROM
    sports_events
WHERE Sport_Type LIKE "Football";
----------------
6
==============================================================
SELECT
    COUNT(*)
FROM
    sports_events
WHERE (Sport_Type LIKE "Racing" AND Location LIKE "usa" OR Location LIKE "Monaco");
---------------------
3
=============================================================
SELECT
    COUNT(*),
    AVG(TV_Viewers_Millions) AS TV_Viewers
FROM
    sports_events
WHERE
    (
        Sport_Type LIKE "Tennis" OR Sport_Type LIKE "Golf" AND Duration_Days < 5
    )
ORDER BY TV_Viewers
--------------------------

COUNT(*)
TV_Viewers
5
9.8000
================================================================
SELECT
    COUNT(*)
    
FROM
    sports_events
    
WHERE Attendance = 0;

------------------
COUNT(Attendance)
6
================================================================
SELECT
    MIN(Prize_Money)
    
FROM
    sports_events
    
-----------------
0
=================================================================
SELECT
    COUNT(*)
    
FROM
    sports_events
    WHERE Prize_Money > "1000000";
    
    -----------------------
    20
==================================================================
SELECT
    COUNT(*),
    YEAR(STR_TO_DATE(DATE, "%m/%d/%Y")) AS max_year
FROM
    sports_events
GROUP BY
    YEAR(STR_TO_DATE(DATE, "%m/%d/%Y"))
ORDER BY
    max_year
DESC
LIMIT 1
--------------------------
COUNT(*)
max_year
134
2023
==============================================================
SELECT
    COUNT(*),
    YEAR(STR_TO_DATE(DATE, "%m/%d/%Y")) AS max_year
FROM
    sports_events
WHERE
    Rating > "8.5" AND Sponsors_Count > "10"
GROUP BY
    YEAR(STR_TO_DATE(DATE, "%m/%d/%Y"))
ORDER BY
    max_year
    LIMIT 1
--------------------------------

COUNT(*)
max_year
1
2016
==============================================================
SELECT
    Sport_Type,
    COUNT(*) AS big
FROM
    sports_events
GROUP BY
    Sport_Type
ORDER BY big
DESC
LIMIT 1
---------------

Sport_Type
big
Multi-Sport
25
====================================================================
SELECT
    COUNT(*)
FROM
    sports_events
WHERE
    Sport_Type LIKE "Championship";
    -----------------
    0
=========================================================================
SELECT
    COUNT(*)
FROM
    sports_events
WHERE
    Participants BETWEEN "100" AND "1000";
    -------------------------
    COUNT(*)
62
================================================================
=
UPDATE sports_events
SET year_value = YEAR(STR_TO_DATE(DATE, "%m/%d/%Y"))
====================================================
CREATE TABLE y_s_c AS SELECT
    year_value,
    COUNT(*)
FROM
    sports_events
GROUP BY
    year_value
ORDER BY
    year_value
============================================================
 CREATE TABLE books_yearly AS
 SELECT
 Published_Year AS year_value,
 SUM(
 CASE
 WHEN Genre LIKE '%Fantasy%'
 AND Genre NOT LIKE '%Biography%'
 THEN 1 ELSE 0
 END
 ) AS fantasy_count,
 SUM(
 CASE
 WHEN Genre LIKE '%Biography%'
 AND Genre NOT LIKE '%Fantasy%'
 THEN 1 ELSE 0
 END
 ) AS biography_count
 FROM books
 GROUP BY Published_Year;
==============================================================
SELECT
    b.year_value AS year,
    b.fantasy_count AS fantasy_count,
    b.biography_count AS biography_count,
    s.yearly_count AS sports_events
FROM
    books_yearly b
LEFT JOIN sports_yearly s ON
    b.year_value = s.year_value
ORDER BY
    b.year_value;
==========================================================