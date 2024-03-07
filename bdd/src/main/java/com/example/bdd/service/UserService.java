package com.example.bdd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bdd.model.Utilisateur;
import com.example.bdd.model.Utilisateur;
import com.example.bdd.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Méthodes de service pour interagir avec la base de données
    public List<Utilisateur> getAllUsers() {
        return userRepository.findAll();
    }

    public Utilisateur getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public Utilisateur saveUser(Utilisateur user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}


