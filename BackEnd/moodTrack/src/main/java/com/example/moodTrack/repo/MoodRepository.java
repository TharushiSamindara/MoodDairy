package com.example.moodTrack.repo;

import com.example.moodTrack.entity.Mood;
import com.example.moodTrack.entity.MoodId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface MoodRepository extends JpaRepository<Mood, MoodId> {
}
