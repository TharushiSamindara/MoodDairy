package com.example.moodTrack.dto;

import jakarta.persistence.Column;

public class UsersDTO {

    private int userId;
    private String username;
    private String password;

    public UsersDTO() {
    }

    public UsersDTO(int userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UsersDTO{" +
                "userId=" + userId +
                ", username=" + username +
                ", password='" + password + '\'' +
                '}';
    }
}
