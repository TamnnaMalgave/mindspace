package com.example.mindspace.controller;

import com.example.mindspace.model.User;
import com.example.mindspace.model.dto.LoginRequest;
import com.example.mindspace.model.dto.RegisterRequest;
import com.example.mindspace.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")  // ✅ Good
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
        User registeredUser = authService.register(request);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User loggedInUser = authService.login(request);
        if (loggedInUser != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("token", "dummy-token");
            response.put("user", loggedInUser);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
