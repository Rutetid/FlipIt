import React, { useState } from "react";

const FlipCard = ({card}) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(!flipped);
	};

	return (
		<div>
			<style jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .flip-card {
          background-color: transparent;
          width: 300px;
          height: 300px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transform: ${flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: #bbb;
          color: black;
        }

        .flip-card-back {
          background-color: #2980b9;
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<h1 className="flex pt-10 px-5 justify-center text-4xl ">
							 {card.question}
						</h1>
						<button
							type="button"
							className="px-3 py-2 bg-orange-400 w-auto  text-3xl flex absolute right-5 bottom-5 rounded-lg"
							onClick={handleFlip}
						>
							{" "}
							Answer
						</button>
					</div>
					<div className="flip-card-back">
						<h1 className="flex pt-10 px-5 justify-center text-4xl ">
						{card.answer}
						</h1>
						<button
							type="button"
							className="px-3 py-2 bg-orange-400 w-auto  text-3xl flex absolute right-5 bottom-5 rounded-lg"
							onClick={handleFlip}
						>
							{" "}
							Question
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
