import { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Header from '../components/Header';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Info, School, AccountCircle } from '@mui/icons-material';
import { useRouter } from 'next/router';

function Welcome() {
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        router.replace('/edu-track');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const features = [
    {
      title: 'School Info',
      description: 'Get detailed information about your school.',
      icon: <School fontSize="large" sx={{ color: '#6c63ff' }} />,
      path: '/school-info',
    },
    {
      title: 'Profile',
      description: 'Manage your account and personal details.',
      icon: <AccountCircle fontSize="large" sx={{ color: '#6c63ff' }} />,
      path: '/profileinfo',
    },
    {
      title: 'More Info',
      description: 'Discover other exciting features of our platform.',
      icon: <Info fontSize="large" sx={{ color: '#6c63ff' }} />,
      path: '/more-info',
    },
  ];

  const handleFeatureClick = (path) => {
    router.replace(path);
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          marginTop: '80px',
          textAlign: 'center',
          padding: 4,
          backgroundColor: '#f9fafb',
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: 2 }}>
          Welcome, {userEmail}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: 4, color: '#555' }}>
          We are glad to have you here. Explore the features below to get started!
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Card
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
                  },
                }}
                onClick={() => handleFeatureClick(feature.path)}
              >
                <CardContent>
                  {feature.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '600', marginTop: 2, color: '#333' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#777' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            backgroundColor: '#6c63ff',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#5848d6',
            },
          }}
          onClick={() => router.replace('/explore')}
        >
          Explore More
        </Button>
      </Box>
    </div>
  );
}

export default Welcome;
