package com.example.moodTrack.controller;

import com.example.moodTrack.dto.UsersDTO;
import com.example.moodTrack.service.UsersService;
import com.example.moodTrack.service.impl.UsersServiceImpl;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("api/users")
@CrossOrigin
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping(path = "/register")
    public int registerUser(@RequestBody UsersDTO usersDTO){
        int outputRegister = usersService.registerUsers(usersDTO);
        return outputRegister;
    }

    @GetMapping(path = "/login")
    public int loginUser(@RequestBody UsersDTO usersDTO){
        int outputLogin = usersService.loginUsers(usersDTO);
        return outputLogin;
    }
}
