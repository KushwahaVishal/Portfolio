import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	console.log(singleProjectData);
	const location = useLocation();
	const { projecttitle } = location.state || {};

	const projectdata = singleProjectData.find(p => p.title === projecttitle);
	console.log("project title",projecttitle);
	console.log(projectdata);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{projectdata.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
