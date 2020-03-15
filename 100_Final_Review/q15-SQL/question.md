The attached script has already been run in our `accsoftwarebootcamp` PostgreSQL database.

If you don't have it, the connection details are 

    Host:     pgdb.accsoftwarebootcamp.com
    Port:     5432
    Database: accsoftwarebootcamp
    User:     acc
    password: accrocks
    schema:   hr

You may need the PostgreSQL extension of VSCode by Chris Kolkman or another suitable PG client.

### Question

Write a query which lists all the players that were born after Aaron Brooks.  Write it without hard coding Brooks' date of birth, since upon review, the actual DOB data for him may be changed.  

Hints: 

- Please examine the database for what these tables contain and how they are structured.
- Hint: You may use a sub-query for this question.
