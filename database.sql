CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    perms VARCHAR(255) NOT NULL
);

-- Test user with admin permissions
INSERT INTO users (username, password_hash, perms) 
VALUES ('admin', 'ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae', 'admin');
