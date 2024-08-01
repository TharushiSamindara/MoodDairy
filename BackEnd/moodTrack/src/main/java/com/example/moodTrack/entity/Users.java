package com.example.moodTrack.entity;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {

    @Id
    @Column(name="userId", length=50)
    private int userId;

    @Column(name="userId", length=50)
    private String username;

    @Column(name = "password", length= 50)
    private String password;

    public Users() {
    }

    public Users(int userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void userId(int userId) {
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
        return "Users{" +
                "userId=" + userId +
                ", username=" + username +
                ", password='" + password + '\'' +
                '}';
    }
}
