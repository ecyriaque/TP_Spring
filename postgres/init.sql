-- Vérifier si la base de données existe avant de la créer
SELECT 'CREATE DATABASE ecyriaque' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ecyriaque');

-- Créer la table User
CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Créer un index unique sur la colonne email pour éviter les doublons
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_email ON "User" (email);
