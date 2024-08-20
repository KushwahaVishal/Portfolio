import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import AboutClientSingle from './AboutClientSingle';

const AboutSkills = () => {
	useCountUp({ ref: 'PYTHON', end: 'PYTHON', duration: 2 });
	useCountUp({ ref: 'SQL', end: 'SQL', duration: 2 });
	useCountUp({ ref: 'AWS', end: 'AWS', duration: 2 });
	useCountUp({ ref: 'EXCEL', end: 'EXCEL', duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					
					title="Years of experience"
					counter={<span id="PYTHON" />}
					measurement="+"
				/>

				<CounterItem
					title="Stars on GitHub"
					counter={<span id="SQL" />}
					measurement="k+"
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="AWS" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="EXCEL" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutSkills;
