package com.example.mindspace.repository;


import com.example.mindspace.model.JournalEntry;
import com.example.mindspace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JournalRepository extends JpaRepository<JournalEntry, Long> {
    List<JournalEntry> findByUser(User user);
}

