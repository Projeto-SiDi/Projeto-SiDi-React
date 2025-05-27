import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@mui/material';
import LogoSidi from '../assets/LogoSidi.svg';

export function CriarConta() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [senha, setSenha] = React.useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

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

      <div
        style={{
          width: '500px',
          height: 'auto',
          backgroundColor: '#303741',
          borderRadius: '12px',
          padding: '40px',
          display: 'block',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Título */}
        <h1 style={{ color: 'white', fontSize: '26px', fontWeight: 'bold', textAlign: 'center' }}>
          Crie sua conta
        </h1>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={LogoSidi} alt="Logo Sidi" style={{ width: '110px' }} />
          <p style={{ fontSize: '12px', color: '#7fff7f' }}>
            Intelligence & Innovation Center
          </p>
        </div>

        {/* Nome Completo */}
        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px', marginTop: '30px' }}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          sx={inputStyle}
        />

        {/* Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          sx={inputStyle}
        />

        {/* Criar senha */}
        <FormControl variant="outlined" fullWidth>
          <InputLabel style={{ color: 'white' }}>Criar senha</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={handleClickShowPassword}
                  style={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '12px',
                  }}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </Button>
              </InputAdornment>
            }
            label="Criar senha"
            sx={{
              color: 'white',
              backgroundColor: '#303741',
              '& fieldset': { borderColor: 'gray' },
              '&:hover fieldset': { borderColor: 'white' },
              marginBottom: '28px',
            }}
          />
        </FormControl>

        <Button
  fullWidth
  variant="contained"
  onClick={() => navigate('/verifiqueconta')}
  style={{
    backgroundColor: '#229F43',
    fontWeight: 'bold',
    fontSize: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
  }}
>
  Criar Conta
</Button>

      </div>
    </div>
  );
}

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#303741',
    '& fieldset': { borderColor: 'gray' },
    '&:hover fieldset': { borderColor: 'white' },
  },
};