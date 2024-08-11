import Navbar from "../Navbar";
import { Entry } from "./Entry";
import { useState, useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
	const [flashcards, setFlashcards] = useState([]);
	const FetchData = async () => {
		const response = await axios.get("http://localhost:3000/flashcards", {
			headers: { "Content-Type": "application/json" },
		});
		const temp = response.data;
		setFlashcards(temp);
		
	};
	console.log(flashcards);
	useEffect(() => {
		FetchData();
	}, []);

	return (
		<div>
			<Navbar />
			<h1 className=" mt-20 ml-20 text-3xl"> My Flashcards</h1>
			{flashcards.map((card, index) => (
				<Entry key={index} card={card} />
			))}
		</div>
	);
};
