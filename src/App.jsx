import React from "react";
import Homepage from "./components/Homepage";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Route , Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default App;
