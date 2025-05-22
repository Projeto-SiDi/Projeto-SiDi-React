import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormControl, Button } from '@mui/material';
import LogoSidi from '../assets/LogoSidi.svg';
import { Link } from 'react-router';

export function EsqueciSenha() {

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: '#303741',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		alignContent: 'center',
		flexDirection: "column",

	}));

	const BuuttonStyle = {
		background: '#229F43',
		fontSize: '15px',
	}


	const headerStyle = {
		color: '#ffff',
		fontSize: '40px'
	}

	const LogoSidiStyle = {
		height: '60px',
		width: '200px',
	}



	return (

		<div>
			<Box sx={{ display: 'flex', alignItems: 'center', minWidth: '30%', pl: '35rem' }}>
				<Grid sx={{ height: "600px", justifyContent: "center", alignItems: 'center', width: '992px', flexDirection: 'column' }} >
					<Grid sx={{ maxWidth: '80%' }}>
						<Stack>
							<Item>


								<div>
									<Box sx={{ height: '150px', py: '5rem', fontWeight: '800', display: 'flex', flexDirection: 'column' }}>
										<Grid sx={{ height: '70px' }}>
											<h1 style={headerStyle} >Esqueceu sua senha?</h1>
											<h2 style={headerStyle} >Vamos ajudar você</h2>
											<img src={LogoSidi} style={LogoSidiStyle} />
										</Grid>
									</Box>


									<FormControl sx={{ m: 1, width: '38rem', height: '56px' }} variant="outlined">
										<TextField
											id="outlined-multiline-flexible"
											label="Digite seu email"
											maxRows={2}
											sx={{
												height: '56px',
												width: '38rem',
												marginTop: '25%',
												marginBottom: '30px',
												'& .MuiOutlinedInput-root':
												{
													'& fieldset': { borderColor: 'gray' },
													'&:hover fieldset': { borderColor: 'white' }
												},
												'& .MuiInputBase-input': {
													color: 'white'
												},
												'& label': { color: 'white', height: '20px' }

											}}

										/>


										<Button component={Link} to="/redefinirSenha" style={BuuttonStyle} variant='contained' sx={{ marginTop: '20px' }}>Proximo</Button>

									</FormControl>

								</div>

							</Item>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}