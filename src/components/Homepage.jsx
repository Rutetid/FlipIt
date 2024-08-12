import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import Navbar from "./Navbar";
import axios from "axios";

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [flashcards, setFlashcards] = useState([]);


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

	const next = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1,
		);
	};
	return (
		<div className="">
			<Navbar />
			<div className="flex items-center justify-center mt-20">
				<div className="flex justify-center mt-5">
					<button
						className="absolute mt-20 left-96 p-2 pb-3 border border-text bg-black bg-opacity-35 text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
						onClick={prev}
						type="button"
					>
						&lt;
					</button>
					<div className="flex transition-transform duration-500 ease-in-out">
						{flashcards && flashcards.length > 0 && flashcards[currentIndex] ? (
							<FlipCard card={flashcards[currentIndex]} />
						) : (
							<p>Loading flashcards...</p>
						)}
					</div>
					<button
						className="absolute right-[380px] mt-20 p-2 pb-3 border border-text bg-black bg-opacity-35 text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
						onClick={next}
						type="button"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
