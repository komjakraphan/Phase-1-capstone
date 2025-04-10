CREATE TABLE client (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    email TEXT NOT NULL,
    address TEXT,
    password NOT NULL,
)

CREATE TABLE meeting (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic TEXT NOT NULL, 
    numPeople TINYINT,
    date DATETIME NOT NULL,
)