import useVacancy from "../hook/useVacancy";
import VacancyItem from "./VacancyItem";

export default function VacancyList() {
	const { vacancyData: vacancyList } = useVacancy();
	return (
		<div className='bg-gray-200 pt-1'>
			{vacancyList.map((data) => (
				<VacancyItem key={data.id} vacancy={data}></VacancyItem>
			))}
		</div>
	);
}
