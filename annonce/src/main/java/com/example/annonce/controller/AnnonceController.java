package com.example.annonce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.annonce.model.Annonce;
import com.example.annonce.service.AnnonceService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/annonces")
public class AnnonceController {

    private final AnnonceService annonceService;

    @Autowired
    public AnnonceController(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    @GetMapping
    public List<Annonce> getAllAnnonces(@RequestHeader("Authorization") String authorizationHeader) {
        // Utilisez authorizationHeader pour accéder à la valeur du header Authorization
        System.out.println("Authorization Header: " + authorizationHeader);
        
        return annonceService.getAllAnnonces();
    }
}
