import { Container } from '@mui/material';

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
			<Form />
		</Container>
	);
};
export default Formulario;
