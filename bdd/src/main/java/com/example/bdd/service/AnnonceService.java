package com.example.bdd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bdd.model.Annonce;
import com.example.bdd.repository.AnnonceRepository;

import java.util.List;

@Service
public class AnnonceService {

    private final AnnonceRepository annonceRepository;

    @Autowired
    public AnnonceService(AnnonceRepository annonceRepository) {
        this.annonceRepository = annonceRepository;
    }

    // Méthodes de service pour interagir avec la base de données
    public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }

    public Annonce getAnnonceById(Long id) {
        return annonceRepository.findById(id).orElse(null);
    }

    public Annonce saveAnnonce(Annonce annonce) {
        return annonceRepository.save(annonce);
    }

    public void deleteAnnonce(Long id) {
        annonceRepository.deleteById(id);
    }
}
