import { Box, Button, Stack } from '@mui/material';
import MenuBase from '../../components/MenuBase';

export default function Menu() {
	return (
		<Box className="Content" display={'flex'} justifyContent={'center'}>
			<Stack direction="row" spacing={1} display={'flex'} flexWrap={'wrap'}>
				<MenuBase to="/">
					<Button variant="outlined">Home</Button>
				</MenuBase>
				<MenuBase to="/Movies">
					<Button variant="outlined">Filmes</Button>
				</MenuBase>

				<MenuBase to="/Formulario">
					<Button variant="outlined">Formulário</Button>
				</MenuBase>
			</Stack>
		</Box>
	);
}
