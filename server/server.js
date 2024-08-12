const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

app.use(cors());

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

app.delete("/flashcards/:id", (req, res) => {
		
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
