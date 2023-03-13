import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container maxWidth="lg">
				<Grid container spacing={1}>
					<Grid item xs={4}>
						<div className={styles.logoDiv}>
							<a href="https://www.instagram.com/" target={'_blank'}>
								<AiFillInstagram
									size={30}
									color={'#5e60ce'}
									target={'_blank'}
								/>
							</a>
							<a href="https://www.twitter.com/" target={'_blank'}>
								<AiFillTwitterCircle
									size={30}
									color={'#5e60ce'}
									target={'_blank'}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/guilhermenunesdev/"
								target={'_blank'}
							>
								<AiFillLinkedin size={30} color={'#5e60ce'} target={'_blank'} />
							</a>

							<a href="https://www.github.com/Viilih" target={'_blank'}>
								<AiFillGithub size={30} color={'#5e60ce'} target={'_blank'} />
							</a>
						</div>
					</Grid>
					<Grid item xs={4}>
						<div className={styles.textDiv}>
							<Typography
								variant="subtitle1"
								component="div"
								gutterBottom
								align="center"
							>
								Gostou de conhecer um pouco mais de mim?
							</Typography>
						</div>
					</Grid>
					<Grid item xs={4}>
						<div className={styles.textDiv}>
							<Typography
								variant="h5"
								component="div"
								gutterBottom
								align="center"
								fontStyle="italic"
							>
								Desenvolvido por @Viilih
							</Typography>
							<Typography
								variant="subtitle1"
								component="div"
								gutterBottom
								align="center"
							>
								Projeto final React
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};
export default Footer;
