import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	//const { title } = useParams();
	const {singleProjectData} = useContext(SingleProjectContext);
	const location = useLocation();
	const { projecttitle } = location.state || {};

	const projectdata = singleProjectData.find(p => p.title === projecttitle);
	

	if (!singleProjectData) {
		return <p>Project not found</p>;
	}
	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{projectdata.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{projectdata.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href="https://stoman.me"
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectdata.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{projectdata.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectdata.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{projectdata.ProjectInfo.Technologies[0].techs.join(', ')}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectdata.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{projectdata.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-7">
					{projectdata.ProjectInfo.ProjectDetailsHeading}
				</p>
				{projectdata.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<div key={details.id} className="mb-5">
							<h2 className="font-general-regular text-xl text-primary-dark dark:text-primary-light font-bold mb-2">
								{details.heading}
							</h2>
							<p className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
								{details.details}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
