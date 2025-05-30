  import * as React from 'react';
  import {
    Box, Button, Container, Fab, Paper, Stack, Typography,
    Popover
  } from '@mui/material';
  import { Clock, Gear, GreaterThan, House, Pencil, SignOut } from '@phosphor-icons/react';
  import { Link as RouterLink } from 'react-router-dom';
  import LogoSiDi from '../assets/LogoSidi.svg';
    
  function registroCorrigido(tipo: string, dia: string, hora: string) {
    return { tipo, dia, hora };
  }

  function Calendar({ selectedDate, setSelectedDate, onClose }: any) {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const today = new Date();

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();

    const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const selectDay = (day: number) => {
      const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(selected);
      if (onClose) onClose();
    };

    const [diaEditando, setDiaEditando] = React.useState<string | null>(null);

    
    return (
      <Box
    sx={{
      p: 1,                 
      width: 300,           
      maxHeight: 320,       
      overflow: 'hidden',   
      background: '#fff',
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Button onClick={prevMonth}>&lt;</Button>
          <Typography>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </Typography>
          <Button onClick={nextMonth}>&gt;</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
          {daysOfWeek.map((d) => (
            <Typography key={d} variant="caption" sx={{ fontWeight: 'bold' }}>{d}</Typography>
          ))}
          {[...Array(startDay).keys()].map((_, i) => (
            <Box key={'empty-' + i} />
          ))}
          {[...Array(endOfMonth.getDate()).keys()].map((_, i) => {
            const day = i + 1;
            const isToday =
              today.getDate() === day &&
              today.getMonth() === currentDate.getMonth() &&
              today.getFullYear() === currentDate.getFullYear();
            return (
              <Button
                key={day}
                onClick={() => selectDay(day)}
                sx={{
                  minWidth: 0,
                  backgroundColor: isToday ? '#f44336' : undefined,
                  color: isToday ? '#fff' : undefined,
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  m: '2px'
                }}
              >
                {day}
              </Button>
            );
          })}
        </Box>
      </Box>
    );
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
    const [diaEditando, setDiaEditando] = React.useState<string | null>(null);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <div>
        <Box sx={{ display: 'flex', alignItems: 'stretch', background: '#2C3037', height: '100vh' }}>
          <Stack
            direction="column"
            spacing={4}
            sx={{ background: '#949f9e', width: '120px', overflowY: 'auto', alignItems: 'center', py: 3 }}
          >
            <MenuButton icon={<House size={60} color='#303741' />} label="Início" to="/baterPonto" />
            <MenuButton icon={<Pencil size={60} color='#303741' />} label="Corrigir Ponto" />
            <MenuButton icon={<Clock size={60} color='#303741' />} label="Histórico" />
            <MenuButton icon={<Gear size={60} color='#303741' />} label="Configuração" />
            <MenuButton icon={<SignOut size={60} color='#303741' />} label="Sair da conta" to="/" />
          </Stack>

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

              <Box
                sx={{
                  background: '#1E2022',
                  height: '60px',
                  borderTopRightRadius: '9px',
                  borderTopLeftRadius: '9px',
                  position: 'relative',
                  mt: 18,
                  px: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#949f9e',
                    color: 'white',
                    borderRadius: '999px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    height: '35px',
                    px: 2,
                    minWidth: '120px',
                    position: 'absolute',
                    left: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    '&:hover': {
                      backgroundColor: '#838d89',
                    },
                  }}
                  endIcon={<Box sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid white',
                    ml: 1,
                  }} />}
                  onClick={handleFilterClick}
                >
                  FILTRO:
                </Button>
                <Popover
                
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    PaperProps={{ 
      sx: {
        width: 'fit-content',
        height: 'fit-content', 
        p: 0,
        overflow: 'visible',
        borderRadius: 2,
      },
    }}
    BackdropProps={{
      invisible: true,
    }}
  >
                  <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </Popover>

                <Typography
                  variant='h5'
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '75%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                  }}
                >
                  CORREÇÃO DE PONTO
                </Typography>
              </Box>

              <Stack
                sx={{
                  background: '#949f9e',
                  width: '100%',
                  maxHeight: '820px',
                  margin: '0 auto',
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
                      <Box
    sx={{
      height: 40, // 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: '#2C3037',
      color: 'white',
      px: 2,
      borderRadius: 1,
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 1.5,
      }}
    >
      {diaSemana} ({data})
    </Typography>

    <Box sx={{ position: 'absolute', right: 8, top: '70%', transform: 'translateY(-50%)' }}>
  <Stack spacing={0.5} alignItems="flex-end">
    <Button
      sx={{
        minWidth: 'auto',
        width: 20,
        height: 20,
        padding: 0,
        borderRadius: '50%',
        color: 'white',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      onClick={() => setDiaEditando(diaEditando === data ? null : data)} // Toggle
    >
      <Pencil size={20} weight="fill" />
    </Button>

    {diaEditando === data && (
      <>
        <Button
  variant="contained"
  size="small"
  sx={{
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontSize: '0.75rem', // aumentado
    fontWeight: 'bold',
    padding: '4px 10px', // aumentado
    minHeight: '28px',   // aumentado
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  }}
  onClick={() => console.log('Alterar data de', data)}
>
  ALTERAR DATA
</Button>

<Button
  variant="contained"
  size="small"
  sx={{
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontSize: '0.75rem', // aumentado
    fontWeight: 'bold',
    padding: '4px 10px', // aumentado
    minHeight: '28px',   // aumentado
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  }}
  onClick={() => console.log('Alterar hora de', data)}
>
  ALTERAR HORA
</Button>

      </>
    )}
  </Stack>
</Box>

  </Box>

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
                sx={{ display: 'flex', justifyContent: 'center', mt: 3, color: 'white' }}
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
