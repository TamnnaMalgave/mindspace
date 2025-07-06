package com.example.mindspace.service;

import com.example.mindspace.model.User;
import com.example.mindspace.model.dto.LoginRequest;
import com.example.mindspace.model.dto.RegisterRequest;
import com.example.mindspace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        return userRepository.save(user);
    }

    public User login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
            .orElse(null); // get the User or null if not found

        if (user != null && passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return user;
        }
        return null;
    }
}
