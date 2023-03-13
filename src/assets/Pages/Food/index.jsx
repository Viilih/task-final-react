import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import hambImage from '/public/imgs/hamb.webp';
import churrasImage from '/public/imgs/churras.jpg';
import pizzaImage from '/public/imgs/pizza.jpg';
import japinhaImage from '/public/imgs/japinha.jpg';
import strogonofImage from '/public/imgs/strogonoff.jpg';

const Food = () => {
	const comidas = [
		{
			img: hambImage,
			title: 'Hambúrguer Artesanal',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: churrasImage,
			title: 'Churrasco',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: pizzaImage,
			title: 'Pizza',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: japinhaImage,
			title: 'Comida japonesa',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: strogonofImage,
			title: 'Strogonof',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: hambImage,
			title: 'Hambúrguer Artesanal',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: pizzaImage,
			title: 'Pizza',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
		{
			img: churrasImage,
			title: 'Churrasco',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quod cum unde nesciunt voluptatem velit aliquam neque a ullam.',
		},
	];
	return (
		<Box
			height={'100%'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '3rem 0',
			}}
		>
			<Grid
				container
				spacing={2}
				padding={'1rem'}
				display={'flex'}
				justifyContent={'center'}
			>
				{comidas.map((comida, index) => (
					<Grid item xs={3} key={index}>
						<Card
							sx={{
								maxWidth: 345,
								height: '100%',
								backgroundColor: 'rgb(34, 32, 32)',
							}}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={comida.img}
									alt={comida.title}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										color={'#1E6F9F'}
									>
										{comida.title}
									</Typography>
									<Typography variant="body2" color="white">
										{comida.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
				{/* <Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hambImage}
								alt="green iguana"
							/>
							<CardContent sx={{ backgroundColor: 'rgb(34, 32, 32)' }}>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									color={'#1E6F9F'}
								>
									Hambúrguer Artesanal
								</Typography>
								<Typography variant="body2" color="white">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hambImage}
								alt="green iguana"
							/>
							<CardContent sx={{ backgroundColor: 'rgb(34, 32, 32)' }}>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									color={'#1E6F9F'}
								>
									Hambúrguer Artesanal
								</Typography>
								<Typography variant="body2" color="white">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hambImage}
								alt="green iguana"
							/>
							<CardContent sx={{ backgroundColor: 'rgb(34, 32, 32)' }}>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									color={'#1E6F9F'}
								>
									Hambúrguer Artesanal
								</Typography>
								<Typography variant="body2" color="white">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hambImage}
								alt="green iguana"
							/>
							<CardContent sx={{ backgroundColor: 'rgb(34, 32, 32)' }}>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									color={'#1E6F9F'}
								>
									Hambúrguer Artesanal
								</Typography>
								<Typography variant="body2" color="white">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/static/images/cards/contemplative-reptile.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/static/images/cards/contemplative-reptile.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/static/images/cards/contemplative-reptile.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="/static/images/cards/contemplative-reptile.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid> */}
			</Grid>
		</Box>
	);
};

export default Food;
