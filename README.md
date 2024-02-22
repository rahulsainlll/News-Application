# News Application Backend

This is the backend for a simple blog application built using Node.js, Express, and MongoDB. It provides RESTful API endpoints for managing blog posts and user authentication.

## Features

- **Authentication**: Users can sign up, log in, and log out. Passwords are hashed using bcrypt for security.
- **Authorization**: Only authenticated users can create, edit, and delete their own blog posts.
- **CRUD Operations**: Users can create, read, update, and delete blog posts.
- **Pagination**: Blog posts are paginated to improve performance and user experience.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing blog posts and user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

1. Clone the repository:
   ```bash
   https://github.com/rahulsainlll/News-Application-Backend-API.git

2. Install dependencies:
   ```bash
   cd News-Application-Backend-API
   npm install

3. Set up environment variables:
 - Create a .env file in the root directory.
 - Add the following environment variables:

   ```bash
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>

4. Start the server:
   ```bash
   npm start

## API Endpoints

- **GET /api/posts:** Fetch all news posts.  
- **GET /api/posts/:id**: Fetch a specific news post by ID.  
- **POST /api/posts:** Create a new news post.  
- **PUT /api/posts/:id:** Update an existing news post by ID.  
- **DELETE /api/posts/:id:** Delete a news post by ID.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. 

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or feedback, feel free to contact me at mr.rahulsain@icloud.com.



