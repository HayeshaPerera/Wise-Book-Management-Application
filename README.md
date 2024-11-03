WISE Book Shop 1.0
WISE Book Shop 1.0 is a responsive and dynamic online bookstore application that enables users to manage a collection of books. The project is built using React, Node.js, and Express, with Axios for data fetching, offering a simple and effective solution for inventory management.

Features
View Books: Display a list of books with cover images, descriptions, and prices.
Add Book: Easily add new books to the inventory.
Update Book: Edit details of existing books.
Delete Book: Remove books from the inventory.
Responsive Design: CSS styling for a clean, user-friendly interface across devices.
Technologies Used
Frontend: React, React Router
Backend: Node.js, Express
Data Fetching: Axios
Styling: CSS
Installation
Clone the repository:


git clone https://github.com/HayeshaPerera/Wise-Book-Management-Application.git
cd wise-book-shop
Install dependencies for both frontend and backend:

Frontend:
cd client
npm install

Backend:
cd server
npm install

Usage
Start the backend server:
node server.js


Start the frontend:
cd client
npm start
Open your browser and go to http://localhost:3000 to view the app.

API Endpoints
GET /books: Fetch all books
POST /books: Add a new book
PUT /books/
: Update a book
DELETE /books/
: Delete a book
Project Structure
client/: Contains the React frontend
server/: Contains the Node.js and Express backend
License
This project is open-source and free to use.