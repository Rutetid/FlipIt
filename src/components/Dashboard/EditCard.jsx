import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const EditCard = ({ setShowEditCard }) => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [flashcards, setFlashcards] = useState([]);
	const [selectedID, setSelectedID] = useState("");

	const FetchData = async () => {
		const response = await axios.get("http://localhost:3000/flashcards", {
			headers: { "Content-Type": "application/json" },
		});
		setFlashcards(response.data);
	};
	console.log(flashcards);

	useEffect(() => {
		FetchData();
	}, []);

	const dropdownHandler = (e) => {
		const selectedId = e.target.value;
		setSelectedID(selectedId);
		console.log(selectedID);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.put(
			`http://localhost:3000/flashcards/${selectedID}`,
			{ question: question, answer: answer },
			{ headers: { "Content-Type": "application/json" } },
		);
		console.log(response);
		alert(response.data.message, "Please Refresh the page");
	};

	return (
		<div className="flex absolute top-24 bottom-24 left-24 right-24  bg-slate-200 rounded-lg flex-col ">
			<button
				type="button"
				className="flex absolute right-10 top-5 font-bold bg-red-500 px-3 py-1 rounded-full"
				onClick={() => setShowEditCard(false)}
			>
				X
			</button>
			<h1 className="pl-20 text-3xl pt-10">Update FlashCard</h1>
			<select
				className="w-1/2 ml-20 mt-8 p-1 rounded-lg"
				onChange={dropdownHandler}
			>
				<option value="">Select Item</option>
				{flashcards.map((card, index) => {
					return (
						<option key={index} value={card.id}>
							{card.id}. {card.question}{" "}
						</option>
					);
				})}
			</select>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col pt-5 pl-20 ">
					<input
						type="text"
						className="mt-5 p-2 w-1/4 rounded-lg"
						placeholder="Enter the question"
						onChange={(e) => setQuestion(e.target.value)}
					/>
					<input
						type="text"
						className="mt-5 p-2 w-1/4 rounded-lg"
						placeholder="Enter the answer"
						onChange={(e) => setAnswer(e.target.value)}
					/>
					<button
						type="submit"
						className="mt-5 p-2 w-1/4 bg-slate-400 text-white rounded-lg"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditCard;
