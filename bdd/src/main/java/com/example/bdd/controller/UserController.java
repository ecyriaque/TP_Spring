package com.example.bdd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.bdd.model.Utilisateur;
import com.example.bdd.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Utilisateur> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Utilisateur getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public Utilisateur createUser(@RequestBody Utilisateur user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
