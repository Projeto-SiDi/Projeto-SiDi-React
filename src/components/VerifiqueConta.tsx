import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#303741',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: 'white',
  width: '500px',
  height: 'auto',
  borderRadius: '12px',
  position: 'relative',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
}));

export function VerificarConta() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* Botão Ajuda */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '32px',
          zIndex: 10,
          cursor: 'pointer',
        }}
        onClick={() => alert('Ajuda')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,176a12,12,0,1,1,12-12A12,12,0,0,1,128,200Zm20-64.3c-6.2,5.5-12.6,9.6-12.7,24.3a8,8,0,0,1-16,0c.1-19.6,10.5-28.2,18.1-34.6,5.3-4.6,8.6-7.5,8.6-13.4a12,12,0,0,0-24,0,8,8,0,0,1-16,0,28,28,0,0,1,56,0C160,123.5,150.5,131.1,148,133.7Z" />
        </svg>
      </div>

      {/* Botão Voltar */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          zIndex: 10,
          cursor: 'pointer',
        }}
        onClick={() => window.history.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 256 256"
        >
          <path d="M225.9,128a8.1,8.1,0,0,1-8,8H80.7l58.4,58.3a8.1,8.1,0,0,1-11.4,11.4l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,11.4L80.7,120h137.2A8.1,8.1,0,0,1,225.9,128Z" />
        </svg>
      </div>

      <Item elevation={6}>
        <Stack spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            Verifique sua conta
          </Typography>

          {/* Ícone do Email */}
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fff" viewBox="0 0 256 256">
            <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-12.2,16L128,132.8,44.2,64ZM32,192V71.2l94.3,78.7a8,8,0,0,0,9.4,0L224,71.2V192Z" />
          </svg>

          <Typography variant="h6" fontWeight={600}>
            Enviamos um Email para você.
          </Typography>
          <Typography variant="body1" color="gray">
            Insira o código que enviamos para o Email.
          </Typography>
          <Typography variant="body2" sx={{ mt: -1.5 }}>
            <strong>jose.almeida@sidi.com</strong>
          </Typography>

          {/* Campos do código */}
          <Grid container spacing={2} justifyContent="center">
            {Array.from({ length: 4 }).map((_, i) => (
              <Grid item key={i}>
                <TextField
                  variant="outlined"
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                    },
                  }}
                  sx={{
                    width: '60px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'gray' },
                      '&:hover fieldset': { borderColor: 'white' },
                    },
                    '& input': { color: 'white' },
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Botão Verificar */}
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#3a3f47',
              color: 'white',
              border: '1px solid #5c5c5c',
              width: '200px',
              boxShadow: 'none',
              ':hover': {
                backgroundColor: '#4a4f57',
                borderColor: 'white',
              },
            }}
          >
            VERIFICAR
          </Button>

          {/* Reenviar Código */}
          <Typography
            variant="body2"
            sx={{ mt: 1, textDecoration: 'underline', cursor: 'pointer' }}
          >
            Reenviar código
          </Typography>
        </Stack>
      </Item>
    </div>
  );
}
