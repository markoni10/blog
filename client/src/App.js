import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Preferences from './components/Preferences';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
	const [token, setToken] = useState();

	return (
		<main>
			<Header />
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/blog' element={<Blog />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/dashboard' element={<Dashboard token={token} handleLogin={<Login setToken={setToken} />} />} />
					<Route exact path='/preferences' element={<Preferences token={token} />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
