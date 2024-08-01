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

import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    UsersRepository usersRepository;

    @Override
    public String registerUsers(UsersDTO usersDTO) {
        Integer maxuserId = usersRepository.findMaxUserId();

        int nextuserId = (maxuserId != null) ? maxuserId + 1 : 1;

        Users users = new Users(
                nextuserId,
                usersDTO.getUsername(),
                usersDTO.getPassword()
        );

        if (!usersRepository.existsByUsername(users.getUsername())) {
            usersRepository.save(users);
            return "saved";
        } else {
            return "already exists";
        }
    }





    @Override
    public String loginUsers(UsersDTO usersDTO) {
        // Fetch the user by username
        Optional<Users> userRepo = usersRepository.findByUsername(usersDTO.getUsername());

        if (userRepo.isPresent()) {
            Users user = userRepo.get();
            if (user.getPassword().equals(usersDTO.getPassword())) {
                return "Successfully Login";
            } else {
                return "Invalid Password";
            }
        } else {
            return "Invalid Username";
        }
    }

}
