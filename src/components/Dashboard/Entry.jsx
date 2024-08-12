export const Entry = ({card}) => {
	return (
		<div>
			<div className="bg-gray-600 ml-20 mt-5 py-2 w-4/12 text-2xl text-white pl-2 flex items-center justify-between">
				<div className="flex items-center">
					<div className="text-xl p-1 pr-2 rounded-sm"> {card.id}. </div>
					<div> {card.question} </div>
				</div>
				<div className="flex items-center pr-2">
					<div className="ml-6 text-xl p-1 px-3 bg-blue-600 rounded-sm">
						{" "}
						Edit
					</div>
					<div className="ml-3 text-xl p-1 bg-red-600 rounded-sm"> Delete</div>
				</div>
			</div>
		</div>
	);
};
