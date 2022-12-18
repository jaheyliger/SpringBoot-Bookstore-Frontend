import React from 'react';
import './App.css';
import Home from './layouts/Home/Home';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';

function App() {
	return (
		<>
			<Navbar />
      		<Home />
			<Footer />
		</>
	);
}

export default App;
