import React from 'react'

const AddCard = ({ setShowAddCard }) => {
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
			<form action="">
				<div className="flex flex-col pt-10 pl-20 ">
					<input
						type="text"
						className="mt-5 p-2 w-1/4 rounded-lg"
						placeholder="Enter the question"
					/>
					<input
						type="text"
						className="mt-5 p-2 w-1/4 rounded-lg"
						placeholder="Enter the answer"
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
}

export default AddCard