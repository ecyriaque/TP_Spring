package com.example.bdd.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bdd.model.Utilisateur;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur, Long> {
    // Vous pouvez ajouter des méthodes supplémentaires ici si nécessaire
}
