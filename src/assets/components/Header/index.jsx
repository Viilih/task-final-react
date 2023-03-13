import styles from './Header.module.scss';
import { Box, Container, Grid, Typography } from '@mui/material';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<h1>Um pouco sobre o Gui</h1>
			</Container>
		</header>
	);
};
export default Header;
