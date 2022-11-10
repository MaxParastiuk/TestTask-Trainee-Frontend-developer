import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { IVacancy } from "../models";
import locationIcon from "../img/locationIcon.svg";

interface mapPorps {
	x: number;
	y: number;
	currentVacancy: IVacancy;
}

export default function AddressMap({ x, y, currentVacancy }: mapPorps) {
	return (
		<div className='bg-gray-900 h-96 md:w-72 sm:w-full flex flex-col items-center justify-between xl:absolute xl:right-3.5 xl:top-10 '>
			<div className='text-gray-200 text-lg leading-6  flex-col pt-5'>
				<p className='font-bold text-xl leading-6 '>{currentVacancy.name}</p>
				<p className='flex items-center gap-x-2'>
					<img src={locationIcon} alt='' />
					{currentVacancy.address}
				</p>
				<p>{currentVacancy.phone}</p>
				<p>{currentVacancy.email}</p>
			</div>
			<MapContainer
				className='h-52 md:w-72 sm:w-full'
				center={[x, y]}
				zoom={2}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[x, y]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
