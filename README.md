
This User Management Application is built using React and integrates with the Reqres API to manage users efficiently. It provides key functionalities such as user authentication, user listing with pagination, editing user details, and deleting users. The authentication feature allows users to log in using credentials, and upon successful login, the application retrieves and displays a paginated list of users. Users can edit their details, which updates the data through an API call, and also delete users from the list. The app ensures security by implementing protected routes, redirecting users to the login page if they are not authenticated.

For the frontend, the app utilizes React, React Router, Axios, Tailwind CSS, Framer Motion, and React-bits, while state management is handled using the Context API (with an option for Redux). API requests are managed using Axios, interacting with the Reqres API to fetch, update, and delete user data. The app is deployed on GitHub Pages, making it accessible online.

The key API endpoints used include POST /api/login for authentication, GET /api/users?page=1 for retrieving users, PUT /api/users/{id} for editing user details, and DELETE /api/users/{id} for removing users. The app persists the login token in localStorage to maintain user sessions and displays appropriate error messages for API failures. Pagination is implemented using API-based pagination, and operations like editing and deleting users reflect updates in the UI in real-time.

The folder structure is well-organized, with components for reusable UI elements, pages for different views (Login, Users, Edit), and a Reactbits directory for additional utilities. The app also includes client-side search and filtering, React Router-based navigation, custom hooks for API calls, and a responsive UI built with Tailwind CSS.

The project is authored by **Kajal Tiwari**, and the GitHub repository can be found [here](https://github.com/Kajaltiwari892/user-manage/tree/main).  
You can check out the **live demo** of the project [here](https://Kajaltiwari892.github.io/user-manage).
