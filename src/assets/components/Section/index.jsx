import styles from './Section.module.scss';
import { Box, Container } from '@mui/material';

const Section = props => {
	return (
		<Box
			sx={{
				backgroundColor: '#333333',
				padding: '2rem 1rem',
			}}
			className={styles.section}
		>
			<Container> {props.children}</Container>
		</Box>
	);
};

export default Section;
