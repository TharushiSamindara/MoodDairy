package com.example.moodTrack.controller;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.MoodDTO2;
import com.example.moodTrack.entity.MoodId;
import com.example.moodTrack.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("api/mood")
@CrossOrigin
public class MoodController {

    @Autowired
    private MoodService moodService;

    @PostMapping("/save")
    public String saveMood(@RequestBody MoodDTO moodDTO){
        moodService.saveMood(moodDTO);
        return "Successfully saved";
    }


    @PutMapping("/updateNewMood")
    public String updateMood(@RequestBody MoodDTO moodDTO){
        moodService.updateMood(moodDTO );
        return "Successfully updated";
    }


    @GetMapping(path="/readMood")
    public String readMood(@RequestParam(value = "userId") int userid, @RequestParam(value = "date") Date date) throws ParseException {
        MoodId moodId = new MoodId();
        MoodDTO2 moodDTO2 = new MoodDTO2();
        moodId.setUserId(userid);
        moodId.setDate(date);
        moodDTO2.setId(moodId);
        String mood = moodService.readMood(moodDTO2);
        return mood;
    }

    @DeleteMapping("/deleteMood")
    public String deleteMood(@RequestBody MoodDTO2 moodDTO2){
        moodService.deleteMood(moodDTO2);
        return "Successfully deleted";
    }
}

