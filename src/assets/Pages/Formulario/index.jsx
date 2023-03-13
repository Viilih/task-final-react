import { Container, Typography, Box } from '@mui/material';

import Form from '../../components/Form';

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
		</Container>
	);
};
export default Formulario;
