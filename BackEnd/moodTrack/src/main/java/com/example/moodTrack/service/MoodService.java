package com.example.moodTrack.service;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.MoodDTO2;

public interface MoodService {

    public String saveMood(MoodDTO moodDTO);

    public String updateMood(MoodDTO moodDTO);

    public String  readMood(MoodDTO2 moodDTO2);

    public void deleteMood(MoodDTO2 moodDTO2);
}

