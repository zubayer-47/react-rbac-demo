import CenterLayout from '../../layouts/CenterLayout';

const Home = () => {
	return (
		<CenterLayout>
			<div className=' h-full flex flex-col justify-center gap-3'>
				<h1 className='text-center text-gray-900 mb-5 font-medium text-2xl'>
					Home
				</h1>

				<p>This is home component</p>
			</div>
		</CenterLayout>
	);
};

export default Home;
