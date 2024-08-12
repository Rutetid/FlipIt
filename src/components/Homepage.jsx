import React from 'react'
import { Flashcard } from './Flashcard';
import { FlashcardBack } from './FlashcardBack';
import Navbar from './Navbar';
const Homepage = () => {
  return (
			<div className="">
				<Navbar />
                <div className='flex items-center justify-center mt-20'>
                    <Flashcard />   
                </div>
			</div>
		);
}

export default Homepage