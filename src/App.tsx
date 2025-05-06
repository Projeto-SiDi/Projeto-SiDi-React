import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

export function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#303741',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent: 'center',
    flexDirection: "column",
  
  }));

  
  

  return (

    <Box  sx={{ pl: 2 }}>
    <Grid container spacing={4} sx={{ height: "800px", justifyContent: "center", alignItems: "center", marginTop: "70px" }} >
      <Grid size={4}>
        <Stack spacing={2}>
          <Item>Forumlario</Item>
        </Stack>
      </Grid>
    </Grid>
  </Box>
  )

}


