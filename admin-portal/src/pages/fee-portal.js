// pages/fee-portal.js

import { Box, Typography, Container } from '@mui/material';

function FeePortal() {
    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    FeePortal Information
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '18px', color: '#555' }}>
                    Details about the FeePortal go here.
                </Typography>
            </Box>
        </Container>
    );
}

export default FeePortal;
