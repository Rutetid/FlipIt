import React from "react";
import axios from "axios";
import { useState } from "react";

const EditCard = ({ setShowAddCard }) => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	return (
		<div className="flex absolute top-24 bottom-24 left-24 right-24  bg-slate-200 rounded-lg flex-col ">
			<button
				type="button"
				className="flex absolute right-10 top-5 font-bold bg-red-500 px-3 py-1 rounded-full"
				onClick={() => setShowAddCard(false)}
			>
				X
			</button>
			<h1 className="pl-20 text-3xl pt-10">Add a FlashCard</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col pt-10 pl-20 ">
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
						Add FlashCard
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditCard;
