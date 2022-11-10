import { IVacancy } from "../models";
import { Link } from "react-router-dom";
import locationIcon from "../img/locationIcon.svg";

interface VacancyProps {
	vacancy: IVacancy;
}

export default function VacancyItem({ vacancy }: VacancyProps) {
	return (
		<div className='flex justify-between sm:gap-x-4 md:gap-0 bg-white my-2 rounded w-10/12 items-center mx-auto  px-4 py-6'>
			<img
				className='sm:inline flex-shrink-0 md:hidden rounded-full w-16 h-16'
				src={vacancy.pictures[0]}
				alt=''
			/>
			<div className='flex sm:flex-col-reverse md:w-full md:flex-row justify-between items-center '>
				<div className='flex justify-center gap-x-7 flex'>
					<img
						className='hidden flex-shrink-0 md:inline rounded-full w-20 h-20'
						src={vacancy.pictures[0]}
						alt=''
					/>
					<div className='flex flex-col flex-shrink'>
						<Link
							className='hover:text-blue-800 hover:underline'
							to={`vacancy/${vacancy.id}`}>
							{vacancy.title}
						</Link>
						<p className='text-gray-400'>
							{"Department name · " + vacancy.name}
						</p>
						<div className='flex items-center gap-x-2'>
							<img src={locationIcon} alt='' />{" "}
							<p className='text-gray-400'>{vacancy.address}</p>
						</div>
					</div>
				</div>

				<p className='text-gray-400 self-end'>
					{vacancy.createdAt.split("T").shift()}
				</p>
			</div>
		</div>
	);
}
