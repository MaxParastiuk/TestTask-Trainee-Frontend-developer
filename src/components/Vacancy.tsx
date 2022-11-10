import { useNavigate, useParams } from "react-router-dom";
import useVacancy from "../hook/useVacancy";
import shareIcon from "../img/Share.svg";
import arrowIcon from "../img/Arrow.svg";

import { useState } from "react";
import AddressMap from "./AddressMap";
import ShareItem from "./ShareItem";

export default function Vacancy() {
	const [showShare, setShowShare] = useState(false);
	const { id } = useParams();
	const { vacancyData } = useVacancy();
	const currentVacancy = vacancyData.find((el) => el.id === id);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const location = window.location.href;

	const showShareForm = () => {
		setShowShare(!showShare);
	};

	return (
		<>
			<div className='xl:px-80 md:px-40 sm:px-4'>
				<div className='md:border-b-2 sm:gap-6 sm:flex-col md:flex-row flex justify-between my-10'>
					<h2 className='sm:border-b-2 md:border-0 font-bold text-indigo-900 text-2xl pb-2   leading-8'>
						Job Details
					</h2>
					<div>
						<button
							onClick={showShareForm}
							className='flex items-center gap-x-3'>
							<img src={shareIcon} alt='' /> <p>Share</p>
						</button>
					</div>
					{showShare ? <ShareItem location={location}></ShareItem> : null}
				</div>
				<button className='hidden xl:block bg-blue-900 text-white rounded-lg py-4 px-7 font-semibold text-xs leading-4 mb-8'>
					APPLY NOW
				</button>
				<div className='flex sm:flex-col md:flex-row gap-x-14 mb-2'>
					<h3 className='text-blue-900 font-bold text-2xl leading-8'>
						{currentVacancy?.title}
					</h3>
					<div className='sm:flex md:block sm:flex-row-reverse sm:justify-between sm:mt-3 md:mt-0'>
						<div className='flex flex-col-reverse'>
							<p className='text-blue-900 font-bold text-xl leading-6'>
								{currentVacancy?.salary}
							</p>
							<p className='text-gray-600 font-normal text-lg leading-6'>
								Brutto, per year
							</p>
						</div>

						<p className='md:hidden sm:inline text-gray-400 text-lg leading-6 sm:self-center'>
							{currentVacancy?.createdAt.split("T").shift()}
						</p>
					</div>
				</div>
				<p className='hidden md:inline text-gray-400 text-lg leading-6'>
					{currentVacancy?.createdAt.split("T").shift()}
				</p>
				<h4 className=' my-3 font-bold text-xl leading-6 text-blue-900'>
					Responsopilities
				</h4>
				<p className='text-gray-600 font-normal text-lg leading-6 sm:mt-3 md:mt-0'>
					{currentVacancy?.description}
				</p>
				<h4 className='my-3 font-bold text-xl leading-6 text-blue-900'>
					Compensation & Benefits:
				</h4>
				{currentVacancy?.benefits.map((el) => (
					<li key={Math.random()} className='list-square text-bluetext'>
						{el}
					</li>
				))}
				<button className='bg-blue-900 text-white rounded-lg py-4 px-7 font-semibold text-xs leading-4 mb-20 mt-7 sm:mx-auto sm:block md:inline'>
					APPLY NOW
				</button>
				<h4 className='pb-3 border-b-2 font-bold text-xl leading-6 text-blue-900'>
					Additional info
				</h4>
				<h5 className='mb-2.5 mt-4 text-blue-900 text-lg'>Employment type</h5>
				<div className='flex gap-x-2 sm:flex-wrap sm:gap-y-3'>
					{currentVacancy?.employment_type.map((el) => (
						<p
							key={Math.random()}
							className='bg-indigo-100 px-20 py-4 text-blue-900 rounded-lg font-bold'>
							{el}
						</p>
					))}
				</div>

				<h5 className='mb-2.5 mt-4 text-blue-900 text-lg'>Benefits</h5>
				<div className='flex sm:flex-wrap sm:gap-y-3 gap-x-2'>
					{currentVacancy?.benefits.map((el) => (
						<p
							key={Math.random()}
							className='bg-yellow-100  px-20 py-4 text-yellow-600 rounded-lg font-bold'>
							{el}
						</p>
					))}
				</div>

				<h4 className='font-bold text-2xl leading-8 text-blue-900 mb-5 mt-20  pb-2 border-b-2'>
					Attached images
				</h4>
				<div className='flex gap-x-3'>
					<img
						className='w-2/6 h-28 rounded-lg'
						src={currentVacancy?.pictures[0]}
						alt=''
					/>
					<img
						className='w-2/6 h-28 rounded-lg'
						src={currentVacancy?.pictures[1]}
						alt=''
					/>
					<img
						className='w-2/6 h-28 rounded-lg'
						src={currentVacancy?.pictures[2]}
						alt=''
					/>
				</div>

				<h4 className='sm:block xl:hidden font-bold text-2xl leading-8 text-blue-900 mb-5 mt-20  pb-2 border-b-2'>
					Contacts
				</h4>
				{currentVacancy ? (
					<AddressMap
						currentVacancy={currentVacancy}
						x={currentVacancy!.location.lat}
						y={currentVacancy!.location.long}
					/>
				) : null}
			</div>
			<button
				onClick={goBack}
				className=' sm:mx-auto md:mx-0 md:inline md:left-24 xl:left-52 sm:block sm:mt-5 md:mt-0 md:relative md:top-18  top-20 right-28 bg-gray-300 text-gray-700 rounded-lg mb-28'>
				{" "}
				<div className='flex items-center gap-x-3 py-4 px-6 '>
					<img src={arrowIcon} alt='' />{" "}
					<p className='font-semibold text-xs leading-4'>RETURN TO JOB BOARD</p>
				</div>
			</button>
		</>
	);
}
