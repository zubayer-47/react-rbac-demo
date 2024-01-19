import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import FullScreenLoading from '../components/FullScreenLoading';
import { Unauthorized } from '../components/errors/NotFound';
import useAuth from '../hooks/useAuth';

const PrivateWrapper = () => {
	const token = localStorage.getItem('access_token');
	const navigate = useNavigate();
	const location = useLocation();
	const { state } = useAuth();

	useEffect(() => {
		if (!token && !state.user)
			navigate('/signin', { replace: true, state: { from: location } });
	}, [token, state.user, navigate, location]);

	if (state.authLoading && token) {
		return <FullScreenLoading />;
	}

	if (state.user) {
		return <Outlet />;
	}

	// if ((rights && rights.includes(state.user?.rights as number)) || !rights) {
	// 	return children;
	// }

	return <Unauthorized />;
};

export default PrivateWrapper;
