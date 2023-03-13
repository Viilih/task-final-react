import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import styles from './Home.module.scss';

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
									label={<Typography fontWeight={'600'}>Sobre mim</Typography>}
									{...a11yProps(1)}
								/>
								<Tab
									label={<Typography fontWeight={'600'}>Sobre mim</Typography>}
									{...a11yProps(2)}
								/>
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							Opa que bom ter você por aqui! <br />
							Prazer, meu nome é Guilherme e sou desenvolvedor front end e estou
							desenvolvendo o projeto final do módulo de react do programa Vem
							Ser da empresa DBC
						</TabPanel>
						<TabPanel value={value} index={1}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
							labore vel dolorem accusamus iste numquam similique consequuntur
							aliquam suscipit. Amet!
						</TabPanel>
						<TabPanel value={value} index={2}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
							temporibus provident architecto dolorem est dignissimos.
							Distinctio non dolor molestiae quia?
						</TabPanel>
					</Box>
					<Box>
						<div className={styles.cardImage}>
							<img src="../../public/imgs/stitch.jpg" alt="foto stitch" />
						</div>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
