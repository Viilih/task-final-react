import { ThemeProvider } from '@emotion/react';
import {
	Box,
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import Swal from 'sweetalert2';
import { useState } from 'react';
import theme from '../../../themes';

import Card from '../../components/Card';

const Movie = () => {
	const movies = [
		{
			title: 'Truque de Mestre 2',
			description: 'Um filme de cavaleiros mágicos',
			link: 'https://cinesiageek.com.br/wp-content/uploads/2016/06/truquedemestre-1-768x491.jpg',
		},
		{
			title: 'Truque de Mestre 3',
			description: 'Mais um filme de cavaleiros mágicos',
			link: 'https://cinesiageek.com.br/wp-content/uploads/2016/06/truquedemestre-1-768x491.jpg',
		},
		{
			title: 'Truque de Mestre 4',
			description: 'Ainda mais um filme de cavaleiros mágicos...',
			link: 'https://cinesiageek.com.br/wp-content/uploads/2016/06/truquedemestre-1-768x491.jpg',
		},
		{
			title: 'A origem',
			description: 'Um filme muito muito muito louco',
			link: 'https://www.lancamentosnetflix.com.br/wp-content/uploads/2020/03/filme-a-origem.jpg',
		},
	];

	const [search, setSearch] = useState('');

	const handleSearch = e => {
		setSearch(e.target.value);
	};
	const showAllert = () => {
		Swal.fire({
			title: 'Sua avaliação foi enviada com sucesso!',
			background: '#333333',
			color: '#90FF8D',
		});
	};

	const filteredMovies = movies.filter(movie =>
		movie.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ padding: '1.8rem ' }} height={'100%'}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography variant="h4" textAlign={'center'} color={'#1E6F9F'}>
						Filmes, séries e animes
					</Typography>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="outlined-basic"
							label="Pesquise um filme"
							variant="standard"
							onChange={handleSearch}
							color="labelSearch"
						/>
					</Box>
				</Box>
				<Grid
					container
					spacing={4}
					padding={'1rem'}
					display={'flex'}
					justifyContent={'center'}
				>
					{filteredMovies.map((movie, index) => (
						<Grid
							item
							xs={4}
							display="flex"
							justifyContent="center"
							alignItems="center"
							key={index}
							height={'100%'}
						>
							<Card
								title={movie.title}
								description={movie.description}
								link={movie.link}
								like={0}
								dislike={0}
							/>
						</Grid>
					))}
				</Grid>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						padding: '1rem',
						gap: '1rem',
					}}
				>
					<Typography variant="h5" textAlign={'center'} color={'White'}>
						Tá afim de mandar sua avaliação dos filmes, séries e animes que você
						assistiu?
					</Typography>

					<Button variant="contained" color="btnColor" onClick={showAllert}>
						<Typography variant="inherit" color={'white'}>
							<b>Enviar avaliação</b>
						</Typography>
					</Button>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default Movie;
