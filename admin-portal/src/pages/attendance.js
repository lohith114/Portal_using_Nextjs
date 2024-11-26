// pages/attendance.js

import { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';

const Attendance = () => {
    const [selectedClass, setSelectedClass] = useState(null);

    const classData = [
        { id: 1, name: 'Class 1', description: 'Attendance details for Class 1.' },
        { id: 2, name: 'Class 2', description: 'Attendance details for Class 2.' },
        { id: 3, name: 'Class 3', description: 'Attendance details for Class 3.' },
        { id: 4, name: 'Class 4', description: 'Attendance details for Class 4.' },
        { id: 5, name: 'Class 5', description: 'Attendance details for Class 5.' },
        { id: 6, name: 'Class 6', description: 'Attendance details for Class 6.' },
        { id: 7, name: 'Class 7', description: 'Attendance details for Class 7.' },
        { id: 8, name: 'Class 8', description: 'Attendance details for Class 8.' },
        { id: 9, name: 'Class 9', description: 'Attendance details for Class 9.' },
        { id: 10, name: 'Class 10', description: 'Attendance details for Class 10.' },
    ];

    const handleCardClick = (classId) => {
        setSelectedClass(classData.find((cls) => cls.id === classId));
    };

    return (
        <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!selectedClass ? (
                <>
                    <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: '600', color: '#333' }}>
                        Select a Class
                    </Typography>
                    <Grid container spacing={4}>
                        {classData.map((cls) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={cls.id}>
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: '#fafafa',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                    onClick={() => handleCardClick(cls.id)}
                                >
                                    <CardContent>
                                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 500 }}>
                                            {cls.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : (
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Button
                        variant="outlined"
                        onClick={() => setSelectedClass(null)}
                        sx={{
                            marginBottom: '20px',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            backgroundColor: '#6c63ff',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#5848d6',
                            },
                        }}
                    >
                        Back to Classes
                    </Button>
                    <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: '600' }}>
                        {selectedClass.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        {selectedClass.description}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Attendance;
