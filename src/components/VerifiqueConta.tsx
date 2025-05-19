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
  IconButton
} from '@mui/material';
import { EnvelopeSimple, ArrowLeft, Question } from '@phosphor-icons/react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#303741',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: 'white',
  width: '993px',
  height: '863px',
  borderRadius: '10px',
  position: 'relative',
}));

export function VerificarConta() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#121214',
        position: 'relative',
      }}
    >
      <Item elevation={6}>
        {/* Ícone Voltar */}
        <Box sx={{ position: 'absolute', top: 24, left: 24 }}>
          <IconButton sx={{ color: 'white' }}>
            <ArrowLeft size={24} />
          </IconButton>
        </Box>

        <Stack spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            Verifique sua conta
          </Typography>

          {/* Ícone do email */}
          <EnvelopeSimple size={60} color="#fff" />

          <Typography variant="h6" fontWeight={600}>
            Enviamos um Email para você.
          </Typography>
          <Typography variant="body1" color="gray">
            Insira o código que enviamos para o Email.
          </Typography>
          <Typography variant="body2" sx={{ mt: -1.5 }}>
            <strong>jose.almeida@sidi.com</strong>
          </Typography>

          {/* Campos de código */}
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

          {/* Botão VERIFICAR */}
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

          {/* Reenviar código */}
          <Typography
            variant="body2"
            sx={{ mt: 1, textDecoration: 'underline', cursor: 'pointer' }}
          >
            Reenviar código
          </Typography>
        </Stack>
      </Item>

      {/* Botão de ajuda */}
      <Box
        sx={{
          position: 'fixed',
          bottom: -890,
          right: 'calc(50% - 993px / 2 - 120px)',
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: '50%',
            minWidth: '48px',
            height: '48px',
            backgroundColor: '#3a3f47',
            mb: 0.5,
            p: 0,
          }}
        >
          <Question size={24} />
        </Button>
        <Typography variant="caption" color="white">
          Ajuda
        </Typography>
      </Box>
    </Box>
  );
}
