import './global.css';
import { ThemeProvider } from '@mui/system';
import theme from '../src/themes';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Section from './assets/components/Section';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Container } from '@mui/material';
import Menu from './assets/Pages/Menu';
import Home from './assets/Pages/Home';
import Movie from './assets/Pages/Movie';
import Error from './assets/Pages/Error';
import Formulario from './assets/Pages/Formulario';
import Food from './assets/Pages/Food';

const AppRoutes = () => {
	return (
		<Router>
			<Header />

			<Section>
				<Menu />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Movies" element={<Movie />} />
					<Route path="/Formulario" element={<Formulario />} />
					<Route path="/Formulario" element={<Formulario />} />
					<Route path="/Food" element={<Food />} />
					{/* <Route path="/Grids" element={<Grid />} />
					<Route path="/BtnPage" element={<BtnPage />} />
					<Route path="/Cards" element={<Cards />} />
					<Route path="/Boxx" element={<Boxx />} />
					<Route path="/Image" element={<Image />} />
					<Route path="/Tabless" element={<Tabless />} />
					<Route path="/Theme" element={<Theme />} /> */}
					<Route path="*" element={<Error />} />
				</Routes>
			</Section>

			<Footer />
		</Router>
	);
};

export default AppRoutes;
