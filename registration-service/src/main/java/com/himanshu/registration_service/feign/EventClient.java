package com.himanshu.registration_service.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("EVENT-SERVICE")
public interface EventClient {
    @GetMapping("/event/{id}")
    Object getEvent(@PathVariable Long id);
}
