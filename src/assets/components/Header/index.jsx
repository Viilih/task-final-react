import styles from './Header.module.scss';
import { Box, Container, Grid, Typography } from '@mui/material';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Um pouco sobre o gui</h1>
		</header>
	);
};
export default Header;
