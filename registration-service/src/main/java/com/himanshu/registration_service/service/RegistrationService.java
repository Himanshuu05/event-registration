package com.himanshu.registration_service.service;

import com.himanshu.registration_service.feign.EventClient;
import com.himanshu.registration_service.feign.UserClient;
import com.himanshu.registration_service.model.Registration;
import com.himanshu.registration_service.repository.RegistrationRepo;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    RegistrationRepo registrationRepo;
    @Autowired
    private UserClient userClient;

    @Autowired
    private EventClient eventClient;

    public Registration register(Registration registration) {

        userClient.getUser(registration.getUserId());
        eventClient.getEvent(registration.getEventId());

        registration.setRegisteredAt(LocalDateTime.now());
        return registrationRepo.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepo.findAll();
    }
}
