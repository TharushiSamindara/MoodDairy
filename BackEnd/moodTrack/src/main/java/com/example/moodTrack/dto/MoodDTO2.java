package com.example.moodTrack.dto;

import com.example.moodTrack.entity.MoodId;

public class MoodDTO2 {
    private MoodId id;

    public MoodDTO2() {
    }

    public MoodDTO2(MoodId id) {
        this.id = id;
    }

    public MoodId getId() {
        return id;
    }

    public void setId(MoodId id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "MoodDTO2{" +
                "id=" + id +
                '}';
    }
}
