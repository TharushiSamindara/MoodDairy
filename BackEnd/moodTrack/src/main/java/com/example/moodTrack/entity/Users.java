package com.example.moodTrack.entity;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {

    @Id
    @Column(name="indexNo", length=50)
    private int indexNo;

    @Column(name="username", length=50)
    private int username;

    @Column(name = "password", length= 50)
    private String password;

    public Users() {
    }

    public Users(int indexNo, int username, String password) {
        this.indexNo = indexNo;
        this.username = username;
        this.password = password;
    }

    public int getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(int indexNo) {
        this.indexNo = indexNo;
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
                "indexNo=" + indexNo +
                ", username=" + username +
                ", password='" + password + '\'' +
                '}';
    }
}
