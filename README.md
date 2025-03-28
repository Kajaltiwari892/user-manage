This is a React-based User Management Application that allows authentication, user listing, editing, and deletion using the Reqres API.
##
📌 Features
✅ User Authentication (Login using API)
✅ Paginated User List (Fetch users via API)
✅ Edit User Details (Update user information)
✅ Delete User (Remove users from the list)
✅ Protected Routes (Redirect if not logged in)
✅ Responsive UI (Mobile-friendly)
##
🛠️ Tech Stack
Frontend: React, React Router, Axios, Tailwind CSS , Framer-motion , React-bits
##
State Management: Context API (optional: Redux)
##
API Integration: Reqres API (for user management)
##
Deployment: GitHub Pages (or any free hosting)

📌 API Endpoints Used
Authentication
Login → POST /api/login

✅ Email: eve.holt@reqres.in

✅ Password: cityslicka

Users Management
Get Users → GET /api/users?page=1

Edit User → PUT /api/users/{id}

Delete User → DELETE /api/users/{id}

🖥️ Deployment
🔗 Live Demo: "https://Kajaltiwari892.github.io/user-manage"

📌 Assumptions & Considerations
Token Persistence: Stored in localStorage to maintain user session.

Error Handling: API failures display appropriate error messages.

Pagination: Implemented via API pagination (or lazy loading).

Edit/Delete Operations: Performed using API calls and updated in UI.

📜 Folder Structure

📦 user-manage
├── 📂 src
│   ├── 📂 components  # Reusable UI Components
│   ├── 📂 pages       # App Pages (Login, Users, Edit)
|   |---📂 Reactbits   #
│   ├── App.jsx        # Main App Component
│   ├── main.jsx       # ReactDOM Render
│   ├── routes.jsx     # Routes Configuration
│   └── styles.css     # Global Styles
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 README.md
└── 📄 .gitignore
 
✔ Client-side search & filtering
✔ React Router navigation
✔ Custom hooks for API calls
✔ Responsive UI with Tailwind CSS

👨‍💻 Author
👤 Kajal Tiwari
📌 GitHub: @Kajaltiwari892
 
 
 
