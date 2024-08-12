import axios from "axios";

export const Entry = ({ card, setShowEditCard,serial }) => {
	const handleDelete = async () => {
		const response = await axios.delete(
			`http://localhost:3000/flashcards/${card.id}`,
			{
				headers: { "Content-Type": "application/json" },
			},
		);
		console.log(response);
		alert(response.data.message, "Please Refresh the page");
	};
	return (
		<div>
			<div className="bg-gray-600 ml-20 mt-5 py-2 w-4/12 text-2xl text-white pl-2 flex items-center justify-between">
				<div className="flex items-center">
					<div className="text-xl p-1 pr-2 rounded-sm"> {serial}. </div>
					<div> {card.question} </div>
				</div>
				<div className="flex items-center pr-2">
					<button
						type="button"
						className="ml-6 text-xl p-1 px-3 bg-blue-600 rounded-sm"
						onClick={setShowEditCard}
					>
						{" "}
						Edit
					</button>
					<button
						type="button"
						className="ml-3 text-xl p-1 bg-red-600 rounded-sm"
						onClick={handleDelete}
					>
						{" "}
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
