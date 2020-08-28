package com.training.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.dashboard.model.User;
import com.training.dashboard.repository.UserRepository;

@RestController
@RequestMapping("dashboard")
@CrossOrigin
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users")
	public List<User> getAllShoppingList() {
		return userRepository.findAll();
	}

	@GetMapping("/users/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "userId") Long userId) throws Exception {

		User user = userRepository.findById(userId).orElseThrow(() -> new Exception("User not found on :: " + userId));
		return ResponseEntity.ok(user);

	}

}
