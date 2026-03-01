package com.himanshu.user_service.controller;

import com.himanshu.user_service.model.User;
import com.himanshu.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/create")
    public User create(@RequestBody User user) {
        return service.createUser(user);
    }

    @GetMapping("/users")
    public List<User> getAll() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) {
        return service.getUserById(id);
    }
}
