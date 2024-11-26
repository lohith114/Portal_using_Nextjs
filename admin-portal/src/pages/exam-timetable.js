// pages/exam-timetable.js

import { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const examData = [
    { id: 1, subject: 'Mathematics', date: '2024-04-15', time: '10:00 AM - 12:00 PM' },
    { id: 2, subject: 'Science', date: '2024-04-16', time: '10:00 AM - 12:00 PM' },
    { id: 3, subject: 'English', date: '2024-04-17', time: '10:00 AM - 12:00 PM' },
    { id: 4, subject: 'History', date: '2024-04-18', time: '10:00 AM - 12:00 PM' },
    { id: 5, subject: 'Geography', date: '2024-04-19', time: '10:00 AM - 12:00 PM' },
];

function ExamTimeTable() {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        // Simulating data fetch
        setExams(examData);
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>
            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                Exam Timetable
            </Typography>
            <Grid container spacing={3}>
                {exams.map((exam) => (
                    <Grid item xs={12} sm={6} md={4} key={exam.id}>
                        <Card sx={{ backgroundColor: '#f9fafb', boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {exam.subject}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {exam.date}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {exam.time}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ExamTimeTable;
