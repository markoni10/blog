import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Blog from './components/Blog';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './components/Signup';

function App() {

	return (
		<>
			<Header logo={'AwesomeBlog'} />
			<Routes>
				<Route path='/' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
