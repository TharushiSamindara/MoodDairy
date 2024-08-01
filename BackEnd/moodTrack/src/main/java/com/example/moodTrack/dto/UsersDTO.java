package com.example.moodTrack.dto;

import jakarta.persistence.Column;

public class UsersDTO {

    private int indexNo;
    private int username;
    private String password;

    public UsersDTO() {
    }

    public UsersDTO(int indexNo, int username, String password) {
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
        return "UsersDTO{" +
                "indexNo=" + indexNo +
                ", username=" + username +
                ", password='" + password + '\'' +
                '}';
    }
}
