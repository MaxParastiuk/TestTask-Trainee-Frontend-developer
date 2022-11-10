import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";
import {
	EmailIcon,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
} from "react-share";

interface ShareItemProps {
	location: string;
}

export default function ShareItem({ location }: ShareItemProps) {
	return (
		<div className='flex absolute md:right-40 md:top-20 sm:top-24 sm:right-28 xl:right-80'>
			<div>
				<EmailShareButton url={location}>
					<EmailIcon className='w-11 h-11'></EmailIcon>
				</EmailShareButton>
			</div>
			<div>
				<FacebookShareButton url={location}>
					<FacebookIcon className='w-11 h-11'></FacebookIcon>
				</FacebookShareButton>
			</div>
			<div>
				<LinkedinShareButton url={location}>
					<LinkedinIcon className='w-11 h-11'></LinkedinIcon>
				</LinkedinShareButton>
			</div>
			<div>
				<TwitterShareButton url={location}>
					<TwitterIcon className='w-11 h-11'></TwitterIcon>
				</TwitterShareButton>
			</div>
		</div>
	);
}
