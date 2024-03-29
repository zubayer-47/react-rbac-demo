import { Link } from 'react-router-dom';
import PermissionWrapper from '../Routes/PermissionWrapper';
import { UserRight } from '../contexts/user/types';
import useAuth from '../hooks/useAuth';

const Nav = () => {
	const { state, logout } = useAuth();

	return (
		<div className='flex justify-end items-center gap-5 py-3'>
			{/* <PermissionWrapper
				permission={[UserRight.ADMIN, UserRight.MODER, UserRight.USER]}
				links
			> */}
			<Link
				to='/'
				className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
			>
				Home
			</Link>
			{/* </PermissionWrapper> */}
			<PermissionWrapper permission={UserRight.ADMIN} links>
				<Link
					to='/dashboard'
					className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
				>
					Dashboard
				</Link>
			</PermissionWrapper>
			<PermissionWrapper permission={UserRight.MODER} links>
				<Link
					to='/profile'
					className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
				>
					Profile
				</Link>
			</PermissionWrapper>
			<PermissionWrapper permission={[UserRight.MODER, UserRight.ADMIN]} links>
				<Link
					to='/settings'
					className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
				>
					Settings
				</Link>
			</PermissionWrapper>

			{state.user ? (
				<button
					onClick={logout}
					className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
				>
					Sign Out
				</button>
			) : (
				<>
					<Link
						to='/signin'
						className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
					>
						Log In
					</Link>
					<Link
						to='/signup'
						className='bg-teal-500 text-gray-100 px-2 py-1 rounded-md text-xl'
					>
						Sign Up
					</Link>
				</>
			)}
		</div>
	);
};

export default Nav;
