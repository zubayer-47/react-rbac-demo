import { FormEventHandler, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CenterLayout from '../../layouts/CenterLayout';

const Register = () => {
	const [userCredentials, setCredentials] = useState({
		username: '',
		password: '',
		right: 101,
	});
	const {
		register,

		state: { user },
	} = useAuth();

	if (user) {
		return <Navigate to='/' replace />;
	}

	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const data = {
			username: form.get('username'),
			password: form.get('password'),
			right: form.get('right'),
		};

		register({
			username: data?.username + '',
			password: data?.password + '',
			right: Number(data?.right),
		});
	};

	return (
		<CenterLayout>
			<form onSubmit={onSubmit} className='flex flex-col justify-center gap-3'>
				<h1 className='text-center text-gray-900 mb-5 font-medium text-2xl'>
					Sign Up to your account
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

				<div>
					<label
						htmlFor='roles'
						className='block mb-1 text-sm font-medium text-gray-900'
					>
						Select a Role (default: User)
					</label>
					<select
						id='roles'
						name='right'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500/50  block w-full p-2.5 outline-none transition-all'
						value={userCredentials.right}
						onChange={(e) =>
							setCredentials((prev) => ({
								...prev,
								[e.target.name]: +e.target.value,
							}))
						}
					>
						<option value='101' defaultValue='101'>
							USER
						</option>
						<option value='201'>MODERATOR</option>
						<option value='302'>ADMIN</option>
					</select>
				</div>

				<button
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500/50  block w-full p-2.5 outline-none transition-all mt-5'
					type='submit'
				>
					Sign Up
				</button>
			</form>
		</CenterLayout>
	);
};

export default Register;
