package com.example.moodTrack.service;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.UsersDTO;

public interface UsersService {
    public int registerUsers(UsersDTO usersDTO);

    public int loginUsers(UsersDTO usersDTO);
}

