import styles from './Section.module.scss';
import { Box, Container } from '@mui/material';

const Section = props => {
	return (
		<Box sx={{ backgroundColor: '#333333' }}>
			<Container
				maxWidth="lg"
				sx={{ paddingTop: '3rem', paddingBottom: '3rem' }}
			>
				<Box>{props.children}</Box>
			</Container>
		</Box>
	);
};

export default Section;
