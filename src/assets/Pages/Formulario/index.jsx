import { Container, Typography, Box, Grid } from '@mui/material';

import Form from '../../components/Form';
import styles from './Formulario.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Swal from 'sweetalert2';

const Formulario = () => {
	const showAllert = () => {
		Swal.fire({
			title: 'Sua avaliação foi enviada com sucesso!',
			background: '#333333',
			color: '#90FF8D',
		});
	};
	return (
		<Container>
			<Box padding={'2rem 0'}>
				<Typography
					variant="h4"
					fontWeight={'500'}
					color={'white'}
					textAlign={'center'}
				>
					Se interessou e ta afim de trocar uma ideia?
				</Typography>
				<Typography variant="subtitle1" textAlign={'center'} color={'white'}>
					Só preencher o formulário abaixo que eu entro em contato com você!
				</Typography>
			</Box>
			<Form />
			<Box marginTop={'3rem'}>
				<Typography variant="h4" textAlign={'center'} color={'white'}>
					Hobbies
				</Typography>

				<Grid container spacing={4} padding={'6rem 0'}>
					<Grid
						Item
						xs={4}
						display={'flex'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={'10px'}
					>
						<div className={styles.hobbiesCard}>
							<img
								src={
									'https://i1.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2017/05/5-dicas-para-come%C3%A7ar-a-andar-de-skate.png?fit=1200%2C628&ssl=1'
								}
							/>
						</div>
						<Typography variant="h5" textAlign={'center'} color={'white'}>
							Skate
						</Typography>
					</Grid>
					<Grid
						Item
						xs={4}
						display={'flex'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={'10px'}
					>
						<div className={styles.hobbiesCard}>
							<img
								src={
									'https://preview.redd.it/zphfruuivx251.jpg?auto=webp&s=4ba16b654056289ad3a8c34a7ad9ebe8d65f470c'
								}
							/>
						</div>
						<Typography variant="h5" textAlign={'center'} color={'white'}>
							Games
						</Typography>
					</Grid>
					<Grid
						Item
						xs={4}
						display={'flex'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={'10px'}
					>
						<div className={styles.hobbiesCard}>
							<img
								src={
									'data:image/jpeg;base64,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'
								}
							/>
						</div>
						<Typography variant="h5" textAlign={'center'} color={'white'}>
							Praia
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box marginTop={'3rem'}>
				<Box>
					<Typography variant="h4" textAlign={'center'} color={'white'}>
						Músicas
					</Typography>
					<Typography variant="subtitle1" textAlign={'center'} color={'white'}>
						Cada um dos botões abaixo leva a minha música preferidade de alguns
						artistas que eu gosto de escutar
					</Typography>
				</Box>
				<Box
					marginTop={'3rem'}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ButtonGroup
						variant="outlined"
						aria-label="outlined secondary button group"
						color="secondary"
					>
						<a
							href={'https://www.youtube.com/watch?v=APh3jv7j8sU'}
							target={'_blank'}
						>
							<Button>John Mayer</Button>
						</a>
						<a
							href={'https://www.youtube.com/watch?v=bOhasdCq1OU'}
							target={'_blank'}
						>
							<Button>Revelação</Button>
						</a>
						<a
							href={'https://www.youtube.com/watch?v=qu0k38VMaV4'}
							target={'_blank'}
						>
							<Button>Linking Park</Button>
						</a>
						<a
							href={'https://www.youtube.com/watch?v=A1OqtIqzScI'}
							target={'_blank'}
						>
							<Button>Green Day</Button>
						</a>
					</ButtonGroup>
				</Box>
			</Box>
		</Container>
	);
};
export default Formulario;
