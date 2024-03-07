-- Création de la table user
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT
);

-- Insertion de quelques données dans la table user
INSERT INTO user (username, email, age) VALUES ('john_doe', 'john@example.com', 30);
INSERT INTO user (username, email, age) VALUES ('jane_doe', 'jane@example.com', 25);
INSERT INTO user (username, email, age) VALUES ('alice_smith', 'alice@example.com', 35);
