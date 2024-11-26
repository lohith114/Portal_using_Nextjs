import { useState } from 'react';
import Link from 'next/link';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Box,
} from '@mui/material';
import {
    Home,
    School,
    Payment,
    CalendarToday,
    BarChart,
    TableChart,
    Menu,
    Close,
    CloudUpload,
    Schedule,  // Import the Schedule icon
} from '@mui/icons-material';

const Sidebar = ({ onToggle }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
        onToggle && onToggle(!isCollapsed);
    };

    const menuItems = [
        { text: 'Home', icon: <Home />, path: '/welcome' },
        { text: 'School Info', icon: <School />, path: '/school-info' },
        { text: 'Fee Portal', icon: <Payment />, path: '/fee-portal' },
        { text: 'Attendance', icon: <CalendarToday />, path: '/attendance' },
        { text: 'Report Card', icon: <BarChart />, path: '/report-card' },
        { text: 'Time Table', icon: <TableChart />, path: '/time-table' },
        { text: 'Upload TimeTable', icon: <CloudUpload />, path: '/timetableupload' }, // Ensure the correct path
        { text: 'Exam TimeTable', icon: <Schedule />, path: '/exam-timetable' }, // Ensure the correct path
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: isCollapsed ? 60 : 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isCollapsed ? 60 : 240,
                        boxSizing: 'border-box',
                        backgroundColor: '#333',
                        color: '#fff',
                        transition: 'width 0.3s ease',
                        zIndex: 900,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 1,
                        backgroundColor: '#444',
                        borderBottom: '1px solid #555',
                    }}
                >
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            color: '#fff',
                            transition: 'transform 0.3s',
                            transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                        }}
                    >
                        {isCollapsed ? <Menu /> : <Close />}
                    </IconButton>
                </Box>
                <List>
                    {menuItems.map((item) => (
                        <Link href={item.path} passHref key={item.text}>
                            <ListItem
                                button
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '5px 10px',
                                    padding: 2,
                                    color: '#fff',
                                    textDecoration: 'none',
                                    borderRadius: 1,
                                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: '#555',
                                        transform: 'scale(1.05)',
                                    },
                                    '&.active': {
                                        backgroundColor: '#444',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit', // Ensures the icon color matches the text color
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                {!isCollapsed && (
                                    <ListItemText primary={item.text} sx={{ color: 'inherit' }} />
                                )}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            {/* Main Content Section */}
            <Box
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s ease',
                    marginLeft: isCollapsed ? 60 : 240, // Adjust content position based on sidebar width
                    padding: 2,
                }}
            >
                {/* Your main content goes here */}
            </Box>
        </Box>
    );
};

export default Sidebar;
