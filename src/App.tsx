import React from "react";
import VacancyList from "./components/VacancyList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Vacancy from "./components/Vacancy";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<VacancyList></VacancyList>}></Route>
				<Route path={"/vacancy/:id"} element={<Vacancy></Vacancy>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
