package com.example.moodTrack.service.impl;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.MoodDTO2;
import com.example.moodTrack.entity.Mood;
import com.example.moodTrack.repo.MoodRepository;
import com.example.moodTrack.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class MoodServiceImpl implements MoodService {

    @Autowired
    MoodRepository moodRepository;
    @Override
    public String saveMood(MoodDTO moodDTO) {
        Mood mood = new Mood(
                moodDTO.getId(),
                moodDTO.getDay_mood()
        );


        if(!moodRepository.existsById(mood.getId())){
            moodRepository.save(mood);
            return mood.getId()+"saved";
        }
        else{

            throw new DuplicateKeyException("Already exists");
        }
    }

    @Override
    public String updateMood(MoodDTO moodDTO) {
        if(moodRepository.existsById(moodDTO.getId())){
            Mood mood = moodRepository.getById(moodDTO.getId());
            mood.setDay_mood(moodDTO.getDay_mood());
            moodRepository.save(mood);
            return "Updated";
        }else{
            throw new RuntimeException("Not found history");
        }
    }

    @Override
    public String readMood(MoodDTO2 moodDTO2) {
        System.out.println("***************");
        System.out.println(moodDTO2.getId().getDate());
        System.out.println(moodDTO2.getId().getUserId());
        if(moodRepository.existsById(moodDTO2.getId())){
            String mood = moodRepository.getById(moodDTO2.getId()).getDay_mood();
            return mood;
        }
        else{
            return "Not found history";
        }
    }
    public void deleteMood(MoodDTO2 moodDTO2){
        if(moodRepository.existsById(moodDTO2.getId())){
            moodRepository.deleteById(moodDTO2.getId());
        }
    }
}

