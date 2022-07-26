import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

	return (
		<>
			<Header logo={'Awesome Blog'} />
			<Routes>
				<Route path='/' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
