package com.example.moodTrack.repo;

import com.example.moodTrack.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository
@EnableJpaRepositories
public interface UsersRepository extends JpaRepository<Users, Integer> {
}
