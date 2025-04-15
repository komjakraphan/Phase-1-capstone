CREATE TABLE client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL, 
    email TEXT NOT NULL UNIQUE,
    address TEXT,
    password TEXT NOT NULL,
)

CREATE TABLE meeting (
    id INT PRIMARY KEY AUTO_INCREMENT,
    topic TEXT NOT NULL, 
    numPeople INT NOT NULL,
    date DATETIME NOT NULL,
)