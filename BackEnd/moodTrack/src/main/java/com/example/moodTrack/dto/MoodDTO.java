package com.example.moodTrack.dto;

import com.example.moodTrack.entity.MoodId;

import java.util.Date;

public class MoodDTO {
    private MoodId id;
    private String day_mood;

    public MoodDTO() {
    }

    public MoodDTO(MoodId id, String day_mood) {
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
        return "MoodDTO{" +
                "id=" + id +
                ", day_mood='" + day_mood + '\'' +
                '}';
    }
}
