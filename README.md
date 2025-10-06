# Mindspace

Mindspace is a full-stack wellness platform designed to help users track their mood, gain insights and stay mindful.  
This README explains the application architecture, each major page’s functionality and setup instructions.

---

## 📂 Project Overview
Mindspace is built with a **React** frontend and a **Spring Boot** backend. 

Key features include:

- Secure authentication and protected routes  
- RESTful APIs for user management and mood tracking  
- Responsive, mobile-friendly UI  

---

## 🏠 Homepage
The homepage is the welcoming entry point.

**Non-technical**  
- Presents a clean, calming design to encourage a positive first impression.  
- Highlights core features such as mood tracking, insights and personalized dashboard.  
- Provides quick navigation to signup/login and information sections.

**Technical**  
- Built with React functional components and CSS for responsive layout.  
- Fetches featured content from the backend via a REST API.  
- Uses React Router for seamless navigation without page reloads.



![Homepage]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b6a99ed9-5ff0-4cc4-938d-2def282e6bc7" />



---

## ℹ️ About Us Page
**Non-technical**  
- Shares the story, mission and team behind Mindspace.  
- Builds trust and explains the purpose of the application.

**Technical**  
- Static content served as a React page with markdown-like rich text.  
- Responsive grid layout ensures readability on all devices.  
- No backend calls, enabling quick load times.



![About Us]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/18468979-a6cd-45c5-a02b-430383ec3a7c" />


---

## 📞 Contact Us Page
**Non-technical**  
- Provides a simple form for users to send feedback or questions.  
- Includes email links for direct communication.

**Technical**  
- React form with controlled components for real-time validation.  
- POSTs data to a Spring Boot endpoint that stores messages in a database.  
- Form input is sanitized and validated on both client and server.



![Contact Us](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6c3a4e94-6a58-463c-ac95-4eca2698fc8b" />
)

---

## 🔑 Signup / Login Page
**Non-technical**  
- Allows users to create an account or securely log in.  
- Offers clear feedback on success or failure (e.g., wrong password).

**Technical**  
- React + Context API for managing authentication state.  
- Communicates with backend `/api/auth` endpoints using JWT for secure sessions.  
- Passwords are hashed using Spring Security’s `BCryptPasswordEncoder`.  
- Includes client-side validation and protected routes.



![Signup](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c0b7f5d5-15b4-4adf-98a6-604f45dca257" />
)


![Login](s<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a29cd12f-9b5b-46e5-bc37-4eb031d16dbe" />
)


---

## 📊 Dashboard Page
**Non-technical**  
- Personalized hub showing a summary of user activity and quick links to key features.  
- Displays daily mood logs, quick insights and motivational content.

**Technical**  
- React dashboard uses reusable components and charts (e.g., Chart.js).  
- Fetches user-specific data via authenticated REST calls.  
- Implements lazy loading to optimize performance.



![Dashboard](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f4c90631-e2aa-4bff-8938-4b75b435b146" />
)


![Dashboard](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f815a17d-c3c8-4469-93bc-f41a66339085" />
)

---

## 🌈 Mood Insights Page
**Non-technical**  
- Lets users record moods and view trends over time.  
- Provides suggestions or mindfulness tips based on mood history.

**Technical**  
- Interactive forms and dynamic data visualization (e.g., line/bar charts).  
- Backend stores mood entries in a relational database (MySQL).  
- Insights generated using simple analytics (average mood score).  
- Protected route ensures only authenticated users can access their data.



![Mood Insights](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/56d96feb-53cd-4497-96cf-65b5c60debc1" />
)

![Mood Insights](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/51e759ce-a778-4379-927d-a89dbf7352be" />
)

---

## 🛠️ Tech Stack
- **Frontend**: React, CSS, Axios, React Router  
- **Backend**: Spring Boot, Spring Security, JPA/Hibernate  
- **Database**: MySQL   

---

## 🚀 Getting Started
### Prerequisites
- Node.js ≥ 18  
- Java ≥ 17   
- MySQL server

### Setup
1. Clone the repo  
   ```bash
   git clone https://github.com/shruti0731/mindspace.git
   cd mindspace
   ```

2. **Backend**  
   ```bash
   cd api
   mvn spring-boot:run
   ```

3. **Frontend**  
   ```bash
   cd mlogin
   npm install
   npm start
   ```

4. Access the app at `http://localhost:3000`.

---

## 📸 Screenshots

**- Dashboard**

![Dashboard](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/87e24ff8-dfc4-4270-8453-22e439a2aa65" />
)

---


![Dashboard](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bf191042-d3c6-4128-b009-ca02395e6b74" />
)

---

**- Profile**
  
![Profile](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d62c4f11-ed40-4cc3-acfb-4d2905ab3860" />
)

---

**- Apply search filters by date, mood, content,etc.**
  
![search_filters](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/97cd9af8-7f42-46a1-bbbc-82a9d238f82f" />
)

---

**- Resource Recommendations**

![Resource](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d1376c9a-de42-479d-afba-a47c2cc72b0b" />
)

---

![Resource](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1a47b55c-57d7-4ad7-bac7-12eeaaf25cae" />
)

---

**- Mood insights**

![Moodinsights](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/52148337-90f5-416a-a66d-a319e1cfcb43" />)


---

![Moodinsights](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ff7ef3cb-cac0-4a85-b645-9ad72431b7f3" />
)


---

## Author
Tamnna Malgave.
