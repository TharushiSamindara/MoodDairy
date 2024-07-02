package com.example.moodTrack.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Table(name = "mood")
public class Mood {

    @EmbeddedId
    private MoodId id;

    @Column(name = "day_mood", length = 45)
    private String day_mood;

    public Mood() {
    }

    public Mood(MoodId id, String day_mood) {
        this.id = id;
        this.day_mood = day_mood;
    }

    public MoodId getId() {
        return id;
    }

    public void setId(MoodId id) {
        this.id = id;
    }

    public String getDay_mood() {
        return day_mood;
    }

    public void setDay_mood(String day_mood) {
        this.day_mood = day_mood;
    }

    @Override
    public String toString() {
        return "Mood{" +
                "id=" + id +
                ", day_mood='" + day_mood + '\'' +
                '}';
    }
}
