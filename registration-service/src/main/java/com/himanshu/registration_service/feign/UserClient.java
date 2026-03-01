package com.himanshu.registration_service.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("USER-SERVICE")
public interface UserClient {

    @GetMapping("/user/{id}")
    Object getUser(@PathVariable("id") Long id);
}
