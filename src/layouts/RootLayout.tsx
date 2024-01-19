import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='bg-gray-50 container mx-auto pb-10 px-10 h-screen overflow-hidden'>
			{children}
		</div>
	);
};

export default RootLayout;
