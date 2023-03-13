import { TextField, Button, Box, Checkbox } from '@mui/material';
import styles from './Form.module.scss';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Form = () => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [telefone, setTelefone] = useState('');
	const [comentario, setComentario] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		setNome('');
		setEmail('');
		setSenha('');
		setTelefone('');
		setComentario('');
		showAllert();
	};
	const showAllert = () => {
		Swal.fire({
			title: 'Seu formulário foi enviado com sucesso!',
			background: '#333333',
			color: '#90FF8D',
		});
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<form onSubmit={handleSubmit} className={styles.formContainer}>
				<TextField
					label="Nome"
					variant="standard"
					required
					value={nome}
					inputProps={{ className: styles.input }}
					onChange={event => setNome(event.target.value)}
				/>
				<TextField
					label="Email"
					variant="standard"
					required
					type="email"
					value={email}
					inputProps={{ className: styles.input }}
					onChange={event => setEmail(event.target.value)}
				/>
				<TextField
					label="Senha"
					variant="standard"
					required
					type="password"
					value={senha}
					inputProps={{ className: styles.input }}
					onChange={event => setSenha(event.target.value)}
				/>
				<TextField
					label="Telefone"
					variant="standard"
					value={telefone}
					type="number"
					inputProps={{ className: styles.input }}
					onChange={event => setTelefone(event.target.value)}
				/>
				<TextField
					label="Comentário"
					variant="standard"
					required
					multiline
					rows={4}
					value={comentario}
					inputProps={{ className: styles.input }}
					onChange={event => setComentario(event.target.value)}
				/>

				<Button type="submit" variant="contained" color="primary">
					Enviar
				</Button>
			</form>
		</Box>
	);
};

export default Form;
