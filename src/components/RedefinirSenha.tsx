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

export function RedefinirSenha() {

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
			<Box sx={{ display: 'flex', alignItems: 'center', minWidth: '6rem', pl: '35rem' }}>
				<Grid sx={{ height: "600px", justifyContent: "center", alignItems: 'center', width: '992px', flexDirection: 'column' }} >
					<Grid sx={{ maxWidth: '80%' }}>
						<Stack>
							<Item>


								<div>
									<Box sx={{ height: '130px', py: '3rem', fontWeight: '800', display: 'flex', flexDirection: 'column' }}>
										<Grid sx={{ height: '70px' }}>
											<h1 style={headerStyle} >Insira sua nova senha</h1>
											<img  src={LogoSidi} style={LogoSidiStyle} />								
											
										</Grid>
									</Box>


									<FormControl sx={{ m: 1, width: '38rem', height: '56px' }} variant="outlined">
										<TextField
											id="outlined-multiline-flexible"
											label="Nova senha"
											maxRows={2}
											sx={{
												height: '56px',
												width: '38rem',
												marginTop: '6rem',
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

										<TextField
											id="outlined-multiline-flexible"
											label="Confirmar nova senha"
											maxRows={2}
											sx={{
												height: '56px',
												width: '38rem',
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


										<Button component={Link} to="/" style={BuuttonStyle} variant='contained' sx={{ marginTop: '20px' }}>Confirmar</Button>

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