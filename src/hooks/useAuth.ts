import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user/Provider';
import axios from '../libs/axios';

export default function useAuth() {
	const navigate = useNavigate();
	const context = useContext(UserContext);
	if (!context) throw new Error('useAuth must be used within a UserProvider');

	const { dispatch } = context;

	const login = useCallback(
		async (data: unknown) => {
			try {
				const res = await axios.post(`/auth/signin`, data);

				console.log(res);

				localStorage.setItem('access_token', res.data?.token);
				dispatch({
					type: 'SET_AUTH',
					payload: {
						id: res.data?.id,
						rights: res.data?.rights,
						username: res.data?.username,
					},
				});
			} catch (error) {
				console.log(error, 'useAuth login');
			}
			/**
			 * Redirect login page / home page
			 */
		},
		[dispatch]
	);

	const register = useCallback(
		async (data: unknown) => {
			try {
				const res = await axios.post(`/auth/signup`, data);
				console.log('res :', res);

				localStorage.setItem('access_token', res.data?.token);
				dispatch({
					type: 'SET_AUTH',
					payload: {
						id: res.data?.id,
						rights: res.data?.rights,
						username: res.data?.username,
					},
				});
			} catch (error) {
				console.log(error, 'useAuth login');
			}
			/**
			 * Redirect login page / home page
			 */
		},
		[dispatch]
	);

	const logout = useCallback(() => {
		localStorage.removeItem('access_token');
		dispatch({ type: 'REM_AUTH' });

		navigate('/', { replace: true });
	}, [dispatch, navigate]);

	return { ...context, login, register, logout };
}
