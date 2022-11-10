import VacancyList from "./components/VacancyList";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
