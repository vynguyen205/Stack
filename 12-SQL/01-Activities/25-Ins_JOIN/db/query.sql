SELECT *
FROM course_names
JOIN department ON course_names.department = department.id;

-- JOIN clause is used to COMBINE rows from two or more tables, based on a RELATED COLUMN between them.
