package com.himanshu.registration_service.controller;


import com.himanshu.registration_service.model.Registration;
import com.himanshu.registration_service.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("registration")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @PostMapping("/register")
    public Registration register(@RequestBody Registration registration) {
        return service.register(registration);
    }

    @GetMapping("/registrations")
    public List<Registration> getAll() {
        return service.getAllRegistrations();
    }
}
