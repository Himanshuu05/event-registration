package com.himanshu.event_service.service;

import com.himanshu.event_service.model.Event;
import com.himanshu.event_service.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
    }
     public List<Event> getEventByLocation(String location){
        return eventRepository.findByLocation(location);
     }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
