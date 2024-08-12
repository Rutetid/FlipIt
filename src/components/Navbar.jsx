import React from 'react'
import { Flashcard } from './Flashcard';
import { FlashcardBack } from './FlashcardBack';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
			<div className="">
				<div className="flex justify-between items-center pt-4 py-2 px-24 bg-top shadow-xl ">
					<button
						type="button"
						className="text-3xl 3xl:text-5xl  font-semibold text-text hover:text-red-600 "
					>
						<Link to={"/"}> FlipIt </Link>
					</button>
					<button
						type="button"
						className="text-2xl 3xl:text-5xl text-text hover:text-red-600"
					>
						{" "}
						<Link to={"/dashboard"}>Dashboard </Link>
					</button>
				</div>
			</div>
		);
}

export default Navbar