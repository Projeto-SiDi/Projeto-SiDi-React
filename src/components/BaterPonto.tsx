import * as React  from 'react';
import { Box, Button, Grid2, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Clock, Gear, House, Pencil, SignOut } from '@phosphor-icons/react';


export function BaterPonto(){

	const StyleMenu = {
		background: '#949f9e',

	}


	
	return(
		<div>
			<Box sx={{ display: 'flex', alignItems: 'center'}}>
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
								<span style={{color: "white"}} >Sair</span>
							</Button>
							
							
					</Stack>
					
				</Grid2>
			</Box>
		</div>
	);
}