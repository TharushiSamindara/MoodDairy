package com.example.moodTrack.entity;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {

    @Id
    @Column(name="username", length=50)
    private int username;

    @Column(name = "password", length= 50)
    private String password;

    public Users() {
    }

    public Users(int username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getUsername() {
        return username;
    }


    public void setUsername(int username) {
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
                "username=" + username +
                ", password='" + password + '\'' +
                '}';
    }


}
