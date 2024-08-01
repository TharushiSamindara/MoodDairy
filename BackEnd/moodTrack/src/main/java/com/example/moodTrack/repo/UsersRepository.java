package com.example.moodTrack.repo;

import com.example.moodTrack.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
@EnableJpaRepositories
public interface UsersRepository extends JpaRepository<Users, Integer> {
    @Query("SELECT MAX(u.userId) FROM Users u")
    Integer findMaxUserId();

    boolean existsByUsername(String username);

    Optional<Users> findByUsername(String username);

}
