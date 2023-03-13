import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import styles from './Home.module.scss';
import stitchImage from '/public/imgs/stitch.jpg';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Home = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			sx={{ marginTop: '4rem' }}
			display={'flex'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<Typography
				variant="h4"
				component="div"
				gutterBottom
				textAlign={'center'}
				color={'#ffffff'}
			>
				Quem sou eu?
			</Typography>

			<Box display={'flex'}>
				<Box>
					<Box>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="basic tabs example"
								justifyContent={'center'}
							>
								<Tab
									label={<Typography fontWeight={'600'}>Sobre mim</Typography>}
									{...a11yProps(0)}
								/>
								<Tab
									label={
										<Typography fontWeight={'600'}>O que esperar?</Typography>
									}
									{...a11yProps(1)}
								/>
								<Tab
									label={<Typography fontWeight={'600'}>Surpresa</Typography>}
									{...a11yProps(2)}
								/>
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							<Typography color={'white'}>
								Opa que bom ter você por aqui! <br />
								Prazer, meu nome é Guilherme e sou desenvolvedor front end e
								estou desenvolvendo o projeto final do módulo de react do
								programa Vem Ser da empresa DBC.
							</Typography>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Typography color={'white'}>
								Esse site foite desenvolvido para você que quer saber mais um
								pouco mais sobre mim, como meus filmes e séries favoritos, até
								as comidas
							</Typography>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<Typography color={'white'}>
								Aqui vai um brinde pra você! <br />
								Já pensou em aprender os conteúdos mais valiosos do mercado de
								TI? Então da uma olhadinha nesse link aqui :)
								<br />
								<ButtonGroup
									variant="contained"
									aria-label="outlined primary button group"
								>
									<a
										href="https://www.dbccompany.com.br/vem-ser/"
										target={'_blank'}
									>
										<Button>Vem Ser DBC</Button>
									</a>
								</ButtonGroup>
							</Typography>
						</TabPanel>
					</Box>
					<Box>
						<div className={styles.cardImage}>
							<img src={stitchImage} alt="foto stitch" />
						</div>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
