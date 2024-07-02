package com.example.moodTrack.service;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.UsersDTO;

public interface UsersService {
    public String registerUsers(UsersDTO usersDTO);

    public String loginUsers(UsersDTO usersDTO);
}

