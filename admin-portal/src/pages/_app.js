// pages/_app.js

import { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase'; // Adjust the import path
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../components/Sidebar'; // Adjust the import path

// MUI Theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#282c34', // Replace with your preferred primary color
        },
        secondary: {
            main: '#61dafb', // Replace with your preferred secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // Replace with your preferred font
    },
});

function MyApp({ Component, pageProps }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(60); // Default collapsed width

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(user !== null);
        });
        return () => unsubscribe();
    }, []);

    const handleSidebarToggle = (isExpanded) => {
        setSidebarWidth(isExpanded ? 240 : 60); // Update width based on sidebar state
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex">
                {isAuthenticated && (
                    <Box width={sidebarWidth}>
                        <Sidebar onToggle={handleSidebarToggle} />
                    </Box>
                )}
                <Box
                    className="main-content"
                    sx={{
                        ml: `${sidebarWidth}px`,
                        transition: 'margin 0.3s',
                        width: `calc(100% - ${sidebarWidth}px)`,
                    }}
                >
                    <Component {...pageProps} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MyApp;
