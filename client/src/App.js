import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Blog from './components/Blog';
import Preferences from './components/Preferences';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	const [token, setToken] = useState();

	return (
		<>
			<Header logo={'Awesome Blog'} />
			<Routes>
				<Route index path='/' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/dashboard' element={<Dashboard token={token} handleLogin={<Login setToken={setToken} />} />} />
				<Route path='/preferences' element={<Preferences token={token} />} />
			</Routes>
		</>
	);
}

export default App;
