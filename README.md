📌 Event Management System – Microservices Architecture
🚀 Overview

This project is a Microservices-based Event Management System built using Spring Boot, Spring Cloud, and PostgreSQL.

The system allows users to:

Create and manage users

Create and manage events

Register users for events

Communicate between services using OpenFeign

Discover services dynamically using Eureka

🏗️ Architecture
Client (React / Postman)
        ↓
---------------------------------
| USER-SERVICE                 |
| EVENT-SERVICE                |
| REGISTRATION-SERVICE         |
---------------------------------
        ↓
Each service has its own PostgreSQL database
🔎 Service Discovery

Eureka Server handles service registration and lookup.

🔗 Inter-Service Communication

OpenFeign is used for REST-based communication between services.

🛠️ Tech Stack

Java 17

Spring Boot

Spring Cloud Netflix Eureka

OpenFeign

Spring Data JPA

Hibernate

PostgreSQL

Maven

React (Frontend Integration)

📂 Microservices
1️⃣ Discovery Server

Runs on port 8761

Registers all services

2️⃣ User Service

Port: 8081

Manages user creation and retrieval

Database: user_db

3️⃣ Event Service

Port: 8082

Manages event creation and retrieval

Database: event_db

4️⃣ Registration Service

Port: 8083

Registers users to events

Communicates with:

USER-SERVICE

EVENT-SERVICE

Database: registration_db

🗄️ Database Setup

Create PostgreSQL databases:

CREATE DATABASE user_db;
CREATE DATABASE event_db;
CREATE DATABASE registration_db;

Update application.properties in each service with your PostgreSQL credentials.

▶️ How to Run
Step 1 – Start Discovery Server
Run DiscoveryServerApplication

Open:

http://localhost:8761
Step 2 – Start Services (In Order)

User Service

Event Service

Registration Service

All services should appear in Eureka dashboard.

📌 API Endpoints
🔹 User Service
Method	Endpoint
POST	/users
GET	/users
GET	/users/{id}
🔹 Event Service
Method	Endpoint
POST	/events
GET	/events
GET	/events/{id}
🔹 Registration Service
Method	Endpoint
POST	/registrations

Example Request:

{
  "userId": 1,
  "eventId": 2
}
🔥 Key Features

Microservices architecture

Independent databases per service

Service discovery using Eureka

REST-based inter-service communication via OpenFeign

Clean layered architecture (Controller → Service → Repository)

Scalable and modular backend design

📈 Future Enhancements

JWT Authentication

API Gateway

Circuit Breaker (Resilience4j)

Docker & Docker Compose

Role-based access control

Cloud deployment (AWS / Azure)

👨‍💻 Author

Himanshu Paswan
Java Full Stack Developer
