import * as React  from 'react';
import { Box, Button, Container, Fab, Paper, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Clock, Gear, GreaterThan, House, Pencil, SignOut } from '@phosphor-icons/react';
import { Link as RouterLink } from 'react-router-dom';
import LogoSiDi from '../assets/LogoSidi.svg';

function batidaDePonto(
  tipo: string,
  dia: string,
  hora: string,
) {
  return { tipo, dia, hora };
}

export function BaterPonto() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const StyleHeader = {
    background: '#1E2022',
  };

  const StyleMain = {
    background: '#949f9e',
  };

  const rows = [
    batidaDePonto('Entrada', '22/12/2025', '08:00'),
    batidaDePonto('Almoço', '22/12/2025', '12:00'),
    batidaDePonto('Volta do almoço', '22/12/2025', '13:00'),
    batidaDePonto('Saída', '22/12/2025', '17:00'),
  ];

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', background: '#2C3037' }}>
        {/* Sidebar */}
        <Stack
          direction="column"
          spacing={4}
          sx={{
            width: '120px',
            height: '100vh',
            backgroundColor: '#949f9e',
            alignItems: 'center',
            py: 3,
          }}
        >
          <Button
            component={RouterLink}
            to="/baterPonto"
            sx={{
              height: '110px',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#838d89',
              },
            }}
          >
            <House size={60} color='#303741' />
            <span>Início</span>
          </Button>

          <Button
            component={RouterLink}
            to="/corrigirPonto"
            sx={{
              height: '110px',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#838d89',
              },
            }}
          >
            <Pencil size={60} color='#303741' />
            <span style={{ textAlign: 'center', width: '100%', display: 'block' }}>Corrigir Ponto</span>

          </Button>

          <Button
            sx={{
              height: '110px',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#838d89',
              },
            }}
          >
            <Clock size={60} color='#303741' />
            <span>Histórico</span>
          </Button>

          <Button
            sx={{
              height: '110px',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#838d89',
              },
            }}
          >
            <Gear size={60} color='#303741' />
            <span>Configuração</span>
          </Button>

          <Button
            component={RouterLink}
            to="/"
            sx={{
              height: '110px',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textTransform: 'none',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#838d89',
              },
            }}
          >
            <SignOut size={60} color='#303741' />
            <span>Sair da conta</span>
          </Button>
        </Stack>
<Box
  component="img"
  src={LogoSiDi}
  alt="LogoSiDi"
  sx={{
    position: 'absolute', 
    top: 45,
    left: 1000, 
    width: '250px',
    height: 'auto',
    zIndex: 20,
  }}
/>

        {/* Conteúdo principal */}
        <Box sx={{ flexGrow: 1 }}>
  <Container disableGutters>

            <Stack
              style={StyleHeader}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '91px',
                borderTopRightRadius: '9px',
                borderTopLeftRadius: '9px',
				mt: 18,
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  height: '1px',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#ffff',
                  fontFamily: 'Roboto',
                  fontWeight: 'Bold',
                }}
              >
                PONTO DIÁRIO
              </Typography>
            </Stack>

            <Stack
              style={StyleMain}
              sx={{
                height: '741px',
                borderEndEndRadius: '9px',
                borderEndStartRadius: '9px',
                position: 'relative',
              }}
            >
              <TableContainer>
                <Table>
                  <TableHead sx={{ height: '100px' }}>
                    <TableRow>
                      <TableCell align='center'>
                        <Typography
                          variant='h4'
                          sx={{
                            height: '1px',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            color: '#ffff',
                            fontFamily: 'Roboto',
                            fontWeight: 'Bold',
                          }}
                        >
                          Batida
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography
                          variant='h4'
                          sx={{
                            height: '1px',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            color: '#ffff',
                            fontFamily: 'Roboto',
                            fontWeight: 'Bold',
                          }}
                        >
                          Data
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography
                          variant='h4'
                          sx={{
                            height: '1px',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            color: '#ffff',
                            fontFamily: 'Roboto',
                            fontWeight: 'Bold',
                          }}
                        >
                          Hora
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.tipo} sx={{ height: '150px', '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{ color: '#ffffff' }} align='center'>{row.tipo}</TableCell>
                        <TableCell sx={{ color: '#ffffff' }} align="center">{row.dia}</TableCell>
                        <TableCell sx={{ color: '#ffffff' }} align="center">{row.hora}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>

            <Fab
  sx={{
    position: 'absolute',
    top: 'calc(100vh - 150px)',
    left: '52%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    background: '#1E2022',
  }}
>
  <GreaterThan color="#fff" size={40} />
</Fab>

<Typography
  variant="h6"
  sx={{ display: 'flex', justifyContent: 'center', mt: 5, color: 'white' }}
>
  REGISTRAR PONTO
</Typography>

          </Container>
        </Box>
      </Box>
    </div>
  );
}
