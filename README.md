# Next.js Authentication App with Email Verification

A modern user authentication system built with Next.js and TypeScript, featuring MongoDB as the database and email verification using Mailtrap.  
Includes signup, login, profile management, and email verification flows.

---

## Tech Stack

- **Next.js** (React framework for server-side rendering and routing)
- **TypeScript** (for type safety and better developer experience)
- **MongoDB** (NoSQL database for storing user data)
- **Mailtrap** (SMTP testing service for email verification)

---

## Features

- User registration with email & password
- Password hashing for security (bcrypt)
- Email verification link sent on signup (via Mailtrap)
- Login functionality with session handling
- Profile page with logout option
- Protected routes with middleware (if applicable)

---

## Folder Structure

src/
└── app/
├── profile/
│ ├── page.tsx # Profile page showing user info and logout
│ └── [id]/page.tsx # Dynamic user profile based on user ID
├── login/page.tsx # Login page
├── signup/page.tsx # Signup page
└── verifyemail/page.tsx # Email verification page
model/
└── userModel.ts # MongoDB user schema and model
dbConfig/
└── dbConfig.ts # Database connection setup
helpers/
└── mailer.ts # Nodemailer email sending helper
middleware.ts # (Optional) Middleware for route protection

---

## Getting Started

### Prerequisites

- Node.js (version 16 or above recommended)
- MongoDB database (local or cloud)
- Mailtrap account for testing emails

### Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/aniruddhathakre/Auth-Nextjs
   cd Auth-Nextjs

   ```

2. Install dependencies: npm install

3. Create a .env file in the root (or src) directory with your environment variables:

MONGODB_URI=your_mongodb_connection_string
NODEMAILER_USER=your_mailtrap_username
NODEMAILER_PASS=your_mailtrap_password
MY_EMAIL=your_verified_sender_email
DOMAIN=http://localhost:3000

4. Run the development server: npm run dev

5. Open http://localhost:3000/signup in your browser to start.

Usage
Register a new user on the signup page

Check Mailtrap inbox for the verification email

Click the verification link to verify your email

Log in with verified credentials

Access and manage your profile, and logout

Troubleshooting
If emails are not sent, check Mailtrap credentials in .env

Make sure MongoDB is running and connected properly

For any runtime errors, check console logs for detailed info

Future Improvements
Add password reset functionality

Improve UI with better styling and animations

Add tests for API routes and components

Deploy on Vercel or other hosting platforms

License
This project is licensed under the MIT License.

Contact
Created by Aniruddha Thakre - feel free to reach out!

---

If you want, I can help you create this file in your project, or tweak the text to sound more casual, formal, or detailed. Just let me know!
