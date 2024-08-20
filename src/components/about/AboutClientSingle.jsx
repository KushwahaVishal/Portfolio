const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<div className="relative w-64 mb-8">
				<div className="absolute inset-0 flex flex-col justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
					<h3 className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">{title}</h3>
				</div>
				<img
					src={image}
					className="w-full h-auto border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg"
					alt={title}
				/>
				
			</div>
		</>
	);
};	

export default AboutClientSingle;
