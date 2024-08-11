import React from 'react'

export const Entry = () => {
  return (
			<div>
				<h1 className=" mt-20 ml-20 text-3xl"> My Flashcards</h1>
				<div className="bg-gray-600 ml-20 mt-5 py-2 w-[500px] text-2xl text-white pl-2 flex items-center">
					<div>What is arrays in C++?</div>

					<div className="ml-6 text-xl p-1 bg-red-600 rounded-sm"> Delete</div>
					<div className="ml-3 text-xl p-1 px-3 bg-blue-600 rounded-sm">
						{" "}
						Edit
					</div>
				</div>
			</div>
		);
}
