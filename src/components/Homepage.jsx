import React from 'react'
import { Flashcard } from './Flashcard';
import { FlashcardBack } from './FlashcardBack';
const Homepage = () => {
  return (
			<div className="">
				<div className="flex justify-between items-center pt-4 py-2 px-24 bg-top shadow-xl ">
					<h1 className="text-3xl 3xl:text-5xl  font-semibold text-text ">
						FlipIt{" "}
					</h1>
					<h1 className="text-2xl 3xl:text-5xl text-text">
						{" "}
						Dashboard{" "}
					</h1>
				</div>

                <div className='flex items-center justify-center mt-20'>
                    <Flashcard />   
                </div>
			</div>
		);
}

export default Homepage