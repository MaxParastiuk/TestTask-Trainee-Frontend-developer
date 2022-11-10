import { useState, useEffect } from "react";
import api from "../api/api";
import { API_URL } from "../constants";
import { IVacancy } from "../models";

export default function useVacancy() {
	const [vacancyData, setVacancyData] = useState<IVacancy[]>([]);

	useEffect(() => {
		api.get<IVacancy[]>(API_URL).then(({ data }) => setVacancyData(data));
	}, []);

	return { vacancyData };
}
