import { useState } from 'react';
import { TextField, Grid, Button, Chip } from '@mui/material';


function Header({handleLogout, setSearchKeyword, handleSearchNews}) {
    
    return(
        <div style={{ backgroundColor: '#F5DAD2'}}>
            <Grid container direction='row' style={{display: "flex", backgroundColor: "#F5DAD2" }}>
                <Grid item xs={2.5} >
                    <h3>Find my news!</h3>    
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        id="filled-basic" 
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        label="Search for news" 
                        variant="filled" 
                        fullWidth={true}>
                    </TextField> 
                </Grid>
                <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <Button variant="contained" onClick={handleSearchNews}>
                        Search
                    </Button>
                </Grid>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Chip label={localStorage.getItem('username')} />
                </Grid>
                <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant="contained" onClick={handleLogout}>
                        Log out
                    </Button>
                </Grid>
                    
            </Grid>
        </div>
        
    );

};

export default Header;