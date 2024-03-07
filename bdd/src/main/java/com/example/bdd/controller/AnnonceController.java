package com.example.bdd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.bdd.model.Annonce;
import com.example.bdd.service.AnnonceService;

import java.util.List;

@RestController
@RequestMapping("/api/annonces")
public class AnnonceController {

    private final AnnonceService annonceService;

    @Autowired
    public AnnonceController(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    @GetMapping
    public List<Annonce> getAllAnnonces() {
        return annonceService.getAllAnnonces();
    }

    @GetMapping("/{id}")
    public Annonce getAnnonceById(@PathVariable Long id) {
        return annonceService.getAnnonceById(id);
    }

    @PostMapping
    public Annonce createAnnonce(@RequestBody Annonce annonce) {
        return annonceService.saveAnnonce(annonce);
    }

    @DeleteMapping("/{id}")
    public void deleteAnnonce(@PathVariable Long id) {
        annonceService.deleteAnnonce(id);
    }
}
