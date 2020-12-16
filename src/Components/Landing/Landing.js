import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import "./Landing.css";
function Landing(){
    return(
        <>
            <Container>
                <Box mt={8} style={{textAlign:'center'}}>
                    <Typography variant="h2">The wedding celebrations of</Typography>
                    <Typography variant="h1">M & V</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Landing;