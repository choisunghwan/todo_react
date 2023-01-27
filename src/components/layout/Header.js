import React from 'react';
import {AppBar, Toolbar, Grid, 
    Typography, Button} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" style={{
        background: '#38d9a9'
    }}>
        <Toolbar>
            <Grid justify="space-between" container>
                <Grid item flex={9}>
                    <div style={
                        {
                            display:'flex',
                            alignItems: 'center'
                        }
                    }>
                        <Typography variant="h4">오늘의 할일</Typography>   
                    </div>
                </Grid>

                <Grid item>
                    <div className='btn-group'>
                        <a href='/login'>로그인</a>
                        <a href='/join'>회원가입</a>
                    </div>
                </Grid>
               
            </Grid>
        </Toolbar>
    </AppBar>
  );
};

export default Header;