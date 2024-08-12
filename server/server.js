const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect((err) => {
	if (err) {
		console.error("Error connecting to database:", err);
		return;
	}
	console.log("Connected to database");
});

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/flashcards", (req, res) => {
	const sql = "SELECT * FROM flashcards";
	db.query(sql, (err, results) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		}
		res.json(results);
	});
});

app.post("/flashcards" , (req ,res) => {
	const sql = "INSERT INTO flashcards (question, answer) VALUES (?, ?)";
	db.query(sql, [req.body.question, req.body.answer], (err, result) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		} 
		res.json({ id: result.insertId });
	});
})

app.delete("/flashcards/:id", (req, res) => {
	const sql = "DELETE FROM flashcards WHERE id = ?";
	db.query(sql , req.params.id , (err , result) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		}
		if (result.affectedRows === 0) {
			res.status(404).json({ message: "Flashcard not found" });
			return;
		}
		res.json({ message: "Flashcard deleted successfully" });
	})
});

app.post("/flashcards/:id" , (req , res) => {
	const sql = "UPDATE flashcards SET question = ? , answer = ? WHERE id = ?";
	db.query(sql  , [req.body.question , req.body.answer , req.params.id] , (err , result) => {
		if (err) {
			res.status(500).json({error: err.message});
			return;
		}
		if (result.affectedRows === 0) {
			res.status(404).json({message: "Flashcard not found"});
			return;
		}
	})
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
