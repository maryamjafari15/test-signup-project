Sign-Up Project Documentation
Introduction

This project is a web application for user registration and login, built with various modern technologies.
In this documentation, we will describe the development steps and explain how to use the application in detail.

Technologies & Tools Used

TypeScript – For static typing and improving code quality.

Tailwind CSS – For fast and efficient UI design and styling.

React Router DOM – For routing and page navigation.

Formik & Yup – For building forms and validating user inputs.

Firebase – As the backend service for data storage and user authentication.

Redux – For state management.

Project Development Steps
1. Installing TypeScript

TypeScript was installed to add static typing and improve development efficiency.

2. Installing & Configuring Tailwind CSS

Tailwind CSS was set up to style the application with responsive and modern UI components.

3. Using React Router DOM

React Router DOM was used to create and manage application routes.

4. Creating Pages & UI Design

The application contains the following pages:

Sign-Up Page

Login Page

Home Page

5. Using Formik & Yup

Formik and Yup were used to build and validate registration and login forms.

Install Formik and Yup:

npm install formik yup


Example import for Yup validation:

import * as Yup from "yup";


Validation rules were created to ensure correct and secure form data submission.

6. Using Firebase

Firebase was used as the backend to store user data and handle authentication.

Install Firebase:

npm install firebase


Firebase was configured by adding the project settings from the Firebase Console:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

initializeApp(firebaseConfig);


User authentication is handled via Firebase Authentication, and data can be stored in Realtime Database or Firestore.

7. State Management with Redux

Redux was used to manage application state.

Install Redux Toolkit and React Redux:

npm install @reduxjs/toolkit react-redux

Project Features

Register new users and store their data in Firebase.

Log in users with stored credentials and validate them.

Responsive and visually appealing UI with Tailwind CSS.

Manage global application state using Redux.

Form validation with Yup to prevent invalid inputs.

How to Run the Project

Clone the repository:

git clone https://github.com/your-repo/signup-project.git


Navigate to the project folder and install dependencies:

cd signup-project
npm install


Start the development server:

npm run dev


Open the project in your browser at:
http://localhost:5173
