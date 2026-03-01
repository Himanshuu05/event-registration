package com.himanshu.user_service.repository;

import com.himanshu.user_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface Repository extends JpaRepository<User,Long> {

}
