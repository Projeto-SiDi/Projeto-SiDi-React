import * as React  from 'react';
import { Box, Button, Container, createTheme, Fab, Grid2, Paper, Stack, styled, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Clock, Gear, GreaterThan, House, Pencil, SignOut } from '@phosphor-icons/react';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router';


function batidaDePonto(
  tipo: string,
  dia: string,
  hora: string,

) {
  return { tipo, dia, hora};
}

export function BaterPonto(){

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
	
	}));

	

	const StyleMenu = {
		background: '#949f9e',

	}

	const StyleHeader = {
		background: '#1E2022'
	}

	const StyleMain = {
		background: '#949f9e'
	}
	
	const rows = [
		batidaDePonto('Entrada', '22/12/2025', '08:00' ),
		batidaDePonto('Almoço',  '22/12/2025', "12:00"),
		batidaDePonto('Volta do almoço',  '22/12/2025', '13:00'),
		batidaDePonto('Saída',  '22/12/2025', '17:00')
	];

	return(
		
		<div>
			
				<Box sx={{ display: 'flex', alignItems: 'center', background: 'var(--CinzaAzulado)'}}>
					<Grid2 >
						<Stack
							style={StyleMenu}
							direction="column"
							spacing={10}
							sx={{display: 'flex', alignItems: "center", width: '120px', paddingTop: '20px'}}
							>
								
								<Button sx={{height: '110px',
											width: '100%',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											textTransform: 'none',
											gap: '2px',
											color: '#949f9e',
												'&:hover': {
													backgroundColor: '#838d89',
													
												}
											}}
										>
									<House size={60} color='#303741' />
									<span style={{color: "white"}}>Inicio</span>
								</Button>

								<Button sx={{height: '110px',
											width: '100%',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											textTransform: 'none',
											gap: '2px',
											color: '#949f9e',
												'&:hover': {
													backgroundColor: '#838d89',
													
												}
										}}
										
								>
									<Pencil size={60} color='#303741' />
									
									<span style={{color: "white"}}>Corrigir Ponto</span>
								</Button>
								
								<Button sx={{height: '110px',
											width: "100%",
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											textTransform: 'none',
											gap: '2px',
											color: '#949f9e',
												'&:hover': {
													backgroundColor: '#838d89',
													
												}
											}}
										>
									<Clock size={60} color='#303741' />
									<span style={{color: "white"}}>Histórico</span>
								</Button>

								<Button sx={{height: '110px',
											width: "100%",
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											textTransform: 'none',
											gap: '2px',
											color: '#949f9e',
												'&:hover': {
													backgroundColor: '#838d89',
													
												}
											}}
										>
									<Gear size={60} color='#303741' />
									<span style={{color: "white"}}>Configuração</span>
								</Button>

								<Button sx={{height: '110px',
											width: "100%",
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											textTransform: 'none',
											gap: '2px',
											color: '#949f9e',
												'&:hover': {
													backgroundColor: '#838d89',
													
												}
										}}
										component={RouterLink} to="/"		
									>
									<SignOut size={60} color='#303741'/>
									<span style={{color: "white"}} >Sair da conta</span>
								</Button>
								
								
						</Stack>
						
						
					</Grid2>

					<Box sx={{alignItems: 'center', width: '1697px', height: '832px'}}>
						<Container >
							<Stack style={StyleHeader} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',  height: '91px', borderTopRightRadius: '9px', borderTopLeftRadius: '9px'}} >
									<Typography 
										variant='h4' 
										sx={{
											height: '1px', 
											alignItems: 'center', 
											display: 'flex', 
											justifyContent: 'center', 
											color: '#ffff', 
											fontFamily: 'Roboto', 
											fontWeight: 'Bold'
										}}
										>
												
										Ponto diário

									</Typography>
							</Stack>
							<Stack style={StyleMain} sx={{height: '741px', borderEndEndRadius: '9px', borderEndStartRadius: '9px', position: 'relative' }}>
									<TableContainer>
										<Table>
											<TableHead sx={{height: '100px'}}>
												<TableRow >
													<TableCell  align='center'>  
														<Typography variant='h4' 
															sx={{
																height: '1px', 
																alignItems: 'center', 
																display: 'flex', 
																justifyContent: 'center', 
																color: '#ffff', 
																fontFamily: 'Roboto', 
																fontWeight: 'Bold'
															}}
														>
															Batida	
														</Typography>
													</TableCell>
													<TableCell align='left'>
														<Typography variant='h4' 
															sx={{
																height: '1px', 
																alignItems: 'center', 
																display: 'flex', 
																justifyContent: 'center', 
																color: '#ffff', 
																fontFamily: 'Roboto', 
																fontWeight: 'Bold'
															}}
														>
															Data	
														</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography variant='h4' 
															sx={{
																height: '1px', 
																alignItems: 'center', 
																display: 'flex', 
																justifyContent: 'center', 
																color: '#ffff', 
																fontFamily: 'Roboto', 
																fontWeight: 'Bold'
															}}
														>
															Hora	
														</Typography>
													</TableCell>
													
													
												</TableRow>
											</TableHead>

											 <TableBody>
													{rows.map((row) => (
														<TableRow sx={{height: '150px', '&:last-child td, &:last-child th': { border: 0 }}}>
																	
															<TableCell sx={{color: 'var(--CinzaAzulado)'}} align='center'>{row.tipo}</TableCell>
															<TableCell sx={{color: 'var(--CinzaAzulado)'}} align="center">{row.dia}</TableCell>
															<TableCell sx={{color: 'var(--CinzaAzulado)'}} align="center">{row.hora}</TableCell>
														
														
														</TableRow>
													))}

													
												</TableBody>
												
										</Table>
										
									</TableContainer>
									
							</Stack>
							<Fab sx={{height: '60px', width: '60px', position: 'absolute', top: 860, left: 937, zIndex: 2, background: '#1E2022'}}  aria-label='add'>
								<GreaterThan color='#ffff' size={40}/>		
							</Fab>
							<Typography
								variant='h5'
								sx={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}

							>
								Registrar ponto
							</Typography>
						</Container>
					</Box>
				</Box>
			
		</div>
	);
}