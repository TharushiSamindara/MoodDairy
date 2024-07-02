package com.example.moodTrack.service.impl;

import com.example.moodTrack.dto.MoodDTO;
import com.example.moodTrack.dto.UsersDTO;
import com.example.moodTrack.entity.Mood;
import com.example.moodTrack.entity.Users;
import com.example.moodTrack.repo.MoodRepository;
import com.example.moodTrack.repo.UsersRepository;
import com.example.moodTrack.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    UsersRepository usersRepository;
    @Override
    public String registerUsers(UsersDTO usersDTO) {
        Users users = new Users(
                usersDTO.getUsername(),
                usersDTO.getPassword()
        );


        if(!usersRepository.existsById(users.getUsername())){
            usersRepository.save(users);
            return "saved";
        }
        else{
            return "already exists";
            //throw new DuplicateKeyException("Already exists");
        }
    }


    @Override
    public String loginUsers(UsersDTO usersDTO) {
        Users user  =  new Users(
                usersDTO.getUsername(),
                usersDTO.getPassword()
        );

        if(usersRepository.existsById(user.getUsername())){
            Users userRepo = usersRepository.getById(user.getUsername());
            if((user.getPassword()).equals(userRepo.getPassword())){
                return "Successfully Login";
            }else{
                return "Invalid Password";
            }
        }else{
            return "Invalid Username";
        }
    }
}
