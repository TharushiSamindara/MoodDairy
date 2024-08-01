package com.example.moodTrack.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Embeddable
public class MoodId implements Serializable {
    @Column(name = "userId", length= 5)
    private int userId;
    @Column(name = "date")
    private Date date;

    public MoodId() {
    }

    public MoodId(int userId, Date date) {
        this.userId = userId;
        this.date = date;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date1) {
        this.date = date1;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MoodId moodId)) return false;
        return getUserId() == moodId.getUserId() && Objects.equals(getDate(), moodId.getDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getDate());
    }
}
