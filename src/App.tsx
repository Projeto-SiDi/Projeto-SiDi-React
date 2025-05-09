import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, withStyles} from '@mui/material';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import logoSidi from './assets/logoSidi.png';


export function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#303741',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent: 'center',
    flexDirection: "column",
  
  }));

  const BuuttonStyle = {
    background: '#00ED3C'
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

    <Box sx={{ display: 'flex',  alignItems: 'center', minWidth: '30%', pl: '32%' }}>
    <Grid sx={{ height: "800px", justifyContent: "center", alignItems: 'center', width: '900px', flexDirection: 'column'}} >
      <Grid sx={{maxWidth: '80%'}}>
        <Stack>
          <Item>
            <div>
              
              
                <TextField
                id="outlined-multiline-flexible"
                label="Email"
                maxRows={2}
                sx={{height: '56px', width: '38rem', marginTop: '30%', marginBottom: '30px'}}
                
              />
              <FormControl sx={{ m: 1,width: '38rem', height: '56px'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        {showPassword ? <EyeClosed/> : <Eye/>}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <Button style={BuuttonStyle} variant='contained' sx={{marginTop: '20px'}}>Entrar</Button>
              </FormControl>
              
            </div>
            
          </Item>
        </Stack>
      </Grid>
    </Grid>
  </Box>
  )

}




