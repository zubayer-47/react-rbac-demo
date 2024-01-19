import { FormEventHandler, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CenterLayout from '../../layouts/CenterLayout';

const Login = () => {
	const [userCredentials, setCredentials] = useState({
		username: '',
		password: '',
	});
	const {
		login,
		state: { user },
	} = useAuth();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (user) navigate('/', { replace: true });
	// }, [user, navigate]);

	if (user) {
		return <Navigate to='/' replace />;
	}

	// console.log('first');
	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const data = {
			username: form.get('username'),
			password: form.get('password'),
		};

		login(data);
	};

	console.log(user);
	return (
		<CenterLayout>
			<form onSubmit={onSubmit} className='flex flex-col justify-center gap-3'>
				<h1 className='text-center text-gray-900 mb-5 font-medium text-2xl'>
					Sign In to your account
				</h1>
				<div className='flex flex-col justify-center '>
					<label
						htmlFor='username'
						className='block mb-1 text-sm font-medium text-gray-900'
					>
						Username
					</label>
					<input
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500/50  block w-full p-2.5 outline-none transition-all'
						type='text'
						name='username'
						value={userCredentials.username}
						onChange={(e) =>
							setCredentials((prev) => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block mb-1 text-sm font-medium text-gray-900'
					>
						Password
					</label>
					<input
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500/50  block w-full p-2.5 outline-none transition-all'
						type='password'
						name='password'
						value={userCredentials.password}
						onChange={(e) =>
							setCredentials((prev) => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
					/>
				</div>

				<button
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500/50  block w-full p-2.5 outline-none transition-all mt-5'
					type='submit'
				>
					Sign In
				</button>
			</form>
		</CenterLayout>
	);
};

export default Login;
