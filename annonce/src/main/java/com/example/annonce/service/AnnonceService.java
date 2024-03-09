package com.example.annonce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.annonce.model.Annonce;

import java.util.Arrays;
import java.util.List;

@Service
public class AnnonceService {

    private final RestTemplate restTemplate;
    
    private final String annonceServiceBaseUrl = "http://localhost:8080/api/annonces";

    @Autowired
    public AnnonceService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Annonce> getAllAnnonces() {
        String url = annonceServiceBaseUrl;
        System.out.println(url);
        Annonce[] annonces = restTemplate.getForObject(url, Annonce[].class);
        return Arrays.asList(annonces);
    }

    // Implémentez les autres méthodes pour récupérer, créer, mettre à jour et supprimer des annonces
}
