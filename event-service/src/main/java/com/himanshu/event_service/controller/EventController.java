package com.himanshu.event_service.controller;

import com.himanshu.event_service.model.Event;
import com.himanshu.event_service.service.EventService;
import jakarta.ws.rs.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("event")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping("/createEvent")
    public Event create(@RequestBody Event event){
        return eventService.createEvent(event);
    }

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id){
        return eventService.getEventById(id);
    }

    @GetMapping("/location/{location}")
    public List<Event> getEventByLocation(@PathVariable String location){
        return eventService.getEventByLocation(location);
    }
}

