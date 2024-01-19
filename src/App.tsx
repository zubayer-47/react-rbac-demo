import { Outlet, Route, Routes } from 'react-router-dom';
import PermissionWrapper from './Routes/PermissionWrapper';
import Nav from './components/Nav';
import { UserRight } from './contexts/user/types';
import RootLayout from './layouts/RootLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

function App() {
	return (
		<RootLayout>
			<Nav />
			<Routes>
				<Route path='/' element={<Outlet />}>
					<Route
						path='/'
						element={
							// <PermissionWrapper
							// 	permission={[UserRight.ADMIN, UserRight.MODER, UserRight.USER]}
							// 	links
							// >
							<Home />
							// </PermissionWrapper>
						}
					/>
					<Route
						path='dashboard'
						element={
							<PermissionWrapper
								permission={UserRight.ADMIN}
								children={<Dashboard />}
							/>
						}
					/>
					<Route
						path='profile'
						element={
							<PermissionWrapper
								permission={UserRight.MODER}
								children={<Profile />}
							/>
						}
					/>
					<Route
						path='settings'
						element={
							<PermissionWrapper
								permission={[UserRight.MODER, UserRight.ADMIN]}
							>
								<Settings />
							</PermissionWrapper>
						}
					/>
					<Route path='signin' element={<Login />} />
					<Route path='signup' element={<Register />} />
				</Route>
			</Routes>
		</RootLayout>
	);
}

export default App;
