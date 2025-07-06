package com.example.mindspace.model;
import jakarta.servlet.http.HttpServletRequest;


import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

import java.time.LocalDate;


@Entity
@Table(name = "journal_entries")
public class JournalEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String mood;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public JournalEntry() {}

    public JournalEntry(LocalDate date, String content, String mood, User user) {
        this.date = date;
        this.content = content;
        this.mood = mood;
        this.user = user;
    }

    // Getters & Setters

    public Long getId() { return id; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
