package com.example.bdd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bdd.model.Annonce;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
    // Vous pouvez ajouter des méthodes supplémentaires ici si nécessaire
}
