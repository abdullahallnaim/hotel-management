# HotelHub - Website

HotelHub is a cutting-edge React web application built on the MERN stack (MongoDB, Express.js, React, Node.js). Leveraging Firebase for authentication and JWT for secure user validation, HotelHub provides a streamlined and secure platform for booking accommodations.

## Features

### 1. Authentication
- Robust authentication system with options for email-password registration and Google authentication.
- Generation of access tokens upon login for secure user identity validation throughout the session.

### 2. User Privacy
- Strict privacy measures to ensure that unauthorized users cannot access 

### 3. Protected Routes
- Implementation of protected routes requiring users to log in before accessing certain sections.
- Seamless redirection to the login page for unauthorized users attempting to access protected routes, enhancing overall security.


## Technologies Used
- **Frontend:** React, react-router
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Authentication:** JWT Authentication, Firebase

## How to Use HotelHub

### **Frontend:**
1. **Browse Hotels**  
   - Upon landing on the homepage, users can view a list of available hotels with their details. The user can filter hotels based on location, price, and availability.
   
2. **Register/Login**  
   - Users can sign up using email-password authentication or log in using their Google account. 
   - On successful login, the user is redirected to their dashboard, where they can manage their bookings.


### **Backend:**
1. **Authentication**  
   - Secure authentication system using JWT tokens and Firebase. The backend verifies user credentials and issues tokens to maintain session security.
   
