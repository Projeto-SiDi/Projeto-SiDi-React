import * as React  from 'react';
import { Box, Button, Container, createTheme, Grid2, Paper, Stack, styled, Tab, Table, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Clock, Gear, House, Pencil, SignOut } from '@phosphor-icons/react';
import { ThemeProvider } from '@emotion/react';


function batidaDePonto(
  tipo: string,
  dia: string,
  hora: number,
  minuto: number
) {
  return { tipo, dia, hora, minuto};
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
		batidaDePonto('Frozen yoghurt', '22/12/2025', 6.0, 24, ),
		batidaDePonto('Ice cream sandwich',  '22/12/2025', 9.0, 37, ),
		batidaDePonto('Eclair',  '22/12/2025', 16.0, 24, ),
		batidaDePonto('Cupcake',  '22/12/2025', 3.7, 67, ),
		batidaDePonto('Gingerbread',  '22/12/2025', 16.0, 49, ),
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
							<Stack style={StyleMain} sx={{height: '741px', borderEndEndRadius: '9px', borderEndStartRadius: '9px'}}>
									<TableContainer>
										<Table>
											<TableHead>
												<TableRow>
													<TableCell align='left'> teste</TableCell>
													<TableCell align='left'> teste</TableCell>
													<TableCell align='left'> teste</TableCell>
													<TableCell align='left'> teste</TableCell>
													
												</TableRow>
											</TableHead>
										</Table>
									</TableContainer>
							</Stack>
						</Container>
					</Box>
				</Box>
			
		</div>
	);
}