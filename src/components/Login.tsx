import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link } from '@mui/material';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import Seja_Bem_vindo from '../assets/Seja_bem_vindo.svg';
import LogoSidi from '../assets/LogoSidi.svg';


export function Login() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#303741',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent: 'center',
    flexDirection: "column",

  }));

  const BuuttonStyle = {
    background: '#229F43'
  }

  const ImgStyle = {
    height: '75px',
    width: '400px',
    marginTop: '7rem ',
  }

  const LogoSidiStyle = {
    height: '60px',
    width: '200px',


  }



  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const [showPassword, setShowPassword] = React.useState(false);


  return (

    <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '30%', pl: '37rem' }}>
      <Grid sx={{ height: "800px", justifyContent: "center", alignItems: 'center', width: '900px', flexDirection: 'column' }} >
        <Grid sx={{ maxWidth: '80%' }}>
          <Stack>
            <Item>
              <img src={Seja_Bem_vindo} style={ImgStyle} />

              <div>
                <img src={LogoSidi} style={LogoSidiStyle} />


                <TextField
                  id="outlined-multiline-flexible"
                  label="Email"
                  maxRows={2}
                  sx={{
                    height: '56px',
                    width: '38rem',
                    marginTop: '15%',
                    marginBottom: '30px',
                    '& .MuiOutlinedInput-root':
                    {
                      '& fieldset': { borderColor: 'gray' },
                      '&:hover fieldset': { borderColor: 'white' }
                    },
                    '& .MuiInputBase-input': {
                      color: 'white'										
                    },
                    '& label': { 
                      color: 'white', 
                      height: '20px' 
                    }


                  }}

                />
                <FormControl
                  sx={{
                    m: 1,
                    width: '38rem',
                    height: '56px',
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
                  variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <EyeClosed color='white'/> : <Eye color='white'/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Button style={BuuttonStyle} variant='contained' sx={{ marginTop: '20px' }}>Entrar</Button>

                  <Link href="#" underline="always" sx={{ paddingTop: '40px' }}>
                    {'Esqueceu a senha?'}
                  </Link>

                  <Link href="#" underline="always" sx={{ paddingTop: '40px', maxWidth: '130px', marginLeft: '237px' }}>
                    {'Criar uma conta'}
                  </Link>
                </FormControl>

              </div>

            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )

}




