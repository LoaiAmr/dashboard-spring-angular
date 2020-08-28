package com.training.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.dashboard.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
