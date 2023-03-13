import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1b5e20',
			headerFooter: '#0D0D0D',
			headerText: '#5E60CE',
			mainSection: '#333333',
		},
		secondary: {
			main: '#ff5722',
		},
		btnColor: {
			main: '#5E60CE',
			colortext: '#FFFFFF',
		},
		labelSearch: {
			main: '#FFFFFF',
		},
	},
});

export default theme;
