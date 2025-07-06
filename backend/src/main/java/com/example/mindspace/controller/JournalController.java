package com.example.mindspace.controller;
import com.example.mindspace.model.JournalEntry;
import com.example.mindspace.model.User;
import com.example.mindspace.repository.JournalRepository;
import com.example.mindspace.repository.UserRepository;
import com.example.mindspace.security.JwtProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/journal")
public class JournalController {

    private final JournalRepository journalRepository;
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    public JournalController(JournalRepository journalRepository, UserRepository userRepository, JwtProvider jwtProvider) {
        this.journalRepository = journalRepository;
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addEntry(@RequestBody JournalEntry entry, HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtProvider.getEmailFromToken(token);
        User user = userRepository.findByEmail(email).orElseThrow();

        entry.setUser(user);
        entry.setDate(LocalDate.now());
        journalRepository.save(entry);

        return ResponseEntity.ok("Journal Entry Saved");
    }

    @GetMapping("/all")
    public ResponseEntity<List<JournalEntry>> getAll(HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtProvider.getEmailFromToken(token);
        User user = userRepository.findByEmail(email).orElseThrow();

        List<JournalEntry> entries = journalRepository.findByUser(user);
        return ResponseEntity.ok(entries);
    }
}
