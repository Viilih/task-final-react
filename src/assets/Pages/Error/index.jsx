import { Box } from '@mui/material';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import styles from './Erro.module.scss';
import erroImage from '/public/imgs/erro404.svg';
function showAllert() {
	Swal.fire({
		title: 'Um erro foi encontrado, porfavor acesse um dos menus abaixo!',
		background: '#333333',
		color: '#FF8D8D',
	});
}
const Error = () => {
	useEffect(() => {}, [showAllert()]);
	return (
		<Box>
			<div className={styles.section}>
				<div className={styles.container}>
					<img
						src={erroImage}
						alt="Imagem de erro 404"
						className={styles.erro}
					/>
					<div className={styles.text}>
						<span className={styles.errorMessage}>Erro 404</span>
						<span className={styles.errorMessage}>Page</span>
						<span className={styles.errorMessage}>Not Found</span>
					</div>
				</div>
			</div>
		</Box>
	);
};
export default Error;
