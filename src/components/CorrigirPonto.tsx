import * as React from 'react';
import {
  Box, Button, Container, Fab, Paper, Stack, Typography,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { Clock, Gear, GreaterThan, House, Pencil, SignOut } from '@phosphor-icons/react';
import { Link as RouterLink } from 'react-router-dom';
import LogoSiDi from '../assets/LogoSidi.svg';

function registroCorrigido(tipo: string, dia: string, hora: string) {
  return { tipo, dia, hora };
}

export function CorrigirPonto() {
  const rows = [
    registroCorrigido('Entrada', '30/04/2025', '08:00'),
    registroCorrigido('Saída Intervalo', '30/04/2025', '12:00'),
    registroCorrigido('Entrada Intervalo', '30/04/2025', '13:00'),
    registroCorrigido('Saída', '30/04/2025', '17:00'),
    registroCorrigido('Entrada', '02/05/2025', '08:00'),
    registroCorrigido('Saída Intervalo', '02/05/2025', '12:00'),
    registroCorrigido('Entrada Intervalo', '02/05/2025', '13:00'),
    registroCorrigido('Saída', '02/05/2025', '17:00'),
  ];

  const diasSemana = {
    '30/04/2025': 'Quarta-feira',
    '02/05/2025': 'Sexta-feira',
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'stretch', background: '#2C3037', height: '100vh' }}>
        {/* Menu lateral */}
        <Stack
          direction="column"
          spacing={4}
          sx={{ background: '#949f9e', width: '120px', overflowY: 'auto', alignItems: 'center', py: 3 }}
        >
          <MenuButton icon={<House size={60} color='#303741' />} label="Início" />
          <MenuButton icon={<Pencil size={60} color='#303741' />} label="Corrigir Ponto" />
          <MenuButton icon={<Clock size={60} color='#303741' />} label="Histórico" />
          <MenuButton icon={<Gear size={60} color='#303741' />} label="Configuração" />
          <MenuButton icon={<SignOut size={60} color='#303741' />} label="Sair da conta" to="/" />
        </Stack>

        {/* Conteúdo principal */}
        <Box sx={{ flexGrow: 1 }}>
          <Container disableGutters>

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
            
            <Stack
  direction="column"
  alignItems="center"
  justifyContent="center"
  spacing={1}
  sx={{
    background: '#1E2022',
    height: '50px',
    borderTopRightRadius: '9px',
    borderTopLeftRadius: '9px',
    overflowY: 'auto',
    py: 1,
    mt: 18,
  }}
>
  <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
    CORREÇÃO DE PONTO
  </Typography>
</Stack>



            <Stack
  sx={{
    background: '#949f9e',
    width: '100%',
    maxHeight: '820px', // 
    margin: '0 auto', // 
    borderRadius: '9px',
    overflowY: 'auto',
    px: 4,
    py: 0.5,
  }}
>

              {Object.entries(diasSemana).map(([data, diaSemana]) => {
                const rowsFiltradas = rows.filter((r) => r.dia === data);
                return (
                  <Box key={data} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 'bold',
                        width: '100%',
                        height: '10%',
                        background: '#2C3037',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        textAlign: 'center',
                      }}
                    >
                      {diaSemana} ({data})
                    </Typography>

                    <Stack spacing={5} mt={2}>
  {rowsFiltradas.map((row, idx) => (
    <Box
      key={idx}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '52px', 
        px: 2,
        py: 0,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', width: '30%' }}>
        {row.tipo}
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.95rem', width: '30%', textAlign: 'center' }}>
        {row.dia}
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', width: '30%', textAlign: 'right' }}>
        {row.hora}
      </Typography>
    </Box>
  ))}
</Stack>


                  </Box>
                );
              })}
            </Stack>

            <Fab
              sx={{
                position: 'absolute',
                top: 'calc(100vh - 120px)',
                left: '50%',
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

function MenuButton({ icon, label, to }: { icon: React.ReactNode, label: string, to?: string }) {
  return (
    <Button
      component={to ? RouterLink : 'button'}
      to={to}
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
      {icon}
      <span>{label}</span>
    </Button>
  );
}