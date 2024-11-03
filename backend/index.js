import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// MySQL Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test"
});

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.json("Hello, this is the backend");
});

// Get all books
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Create a new book
app.post("/books", (req, res) => {
    const q = "INSERT INTO books (title, description, cover, price) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been created successfully");
    });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
});

// Update a book
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET title = ?, description = ?, cover = ?, price = ? WHERE id = ?";
    
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully");
    });
});

// Start the server
app.listen(8800, () => {
    console.log("Connected to backend on port 8800!");
});
