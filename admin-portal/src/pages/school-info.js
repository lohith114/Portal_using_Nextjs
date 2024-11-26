// pages/school-info.js

import { Box, Typography, Container } from '@mui/material';

function SchoolInfo() {
    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    School Information
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '18px', color: '#555' }}>
                    Details about the school go here.
                </Typography>
            </Box>
        </Container>
    );
}

export default SchoolInfo;
