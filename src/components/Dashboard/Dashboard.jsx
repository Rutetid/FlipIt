import Navbar from "../Navbar";
import { Entry } from "./Entry";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCard from "./AddCard";

export const Dashboard = () => {
	const [flashcards, setFlashcards] = useState([]);
	const [showAddCard, setShowAddCard] = useState(false);
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
			{showAddCard ? (	
				<AddCard setShowAddCard ={setShowAddCard}/>
			) : (
				<div>
					<Navbar />
					<h1 className=" mt-20 ml-20 text-3xl"> My Flashcards</h1>
					{flashcards.map((card, index) => (
						<Entry key={index} card={card} />
					))}
					<div className=" ml-52 mt-5 py-2 w-4/12 text-2xl text-white pl-2 flex items-center justify-between">
						<button
							type="button"
							className="text-xl p-1 pr-2 rounded-sm bg-slate-400 text-black "
							onClick={setShowAddCard}
						>
							{" "}
							Add new FlashCard
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
