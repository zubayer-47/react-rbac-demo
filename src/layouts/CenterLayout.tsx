import { PropsWithChildren } from 'react';

const CenterLayout = ({ children }: PropsWithChildren) => {
	return (
		<section className='flex justify-center items-center h-full'>
			{children}
		</section>
	);
};

export default CenterLayout;
