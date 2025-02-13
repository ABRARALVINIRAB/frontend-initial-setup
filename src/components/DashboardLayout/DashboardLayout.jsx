import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import Departments from '../../pages/Dashboard/Departments/Departments';
import Applications from '../../pages/Dashboard/Applications/Applications';
import Home from '../../pages/Home/Home';


const drawerWidth = 240;

// Styled components
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

// Drawer Header
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DashboardLayout() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [activeComponent, setActiveComponent] = useState('');
    const [showWelcome, setShowWelcome] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
        setShowWelcome(false);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleComponentChange = (component) => {
        setActiveComponent(component);
        setShowWelcome(false);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            
            case 'departments':
                return <Departments />;
            case 'applications':
                return <Applications />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ backgroundColor: '#1A3668' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader style={{ background: "#1A3668" }}>
                    <IconButton style={{ background: "white" }} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <List style={{ backgroundColor: '#1A3668', height: '100vh' }}>
                <ListItem disablePadding>
                        <Link to="/" style={{ width: "100%", textDecoration: 'none' }}>
                            <Button 
                                style={{ 
                                    width: "100%", 
                                    background: "transparent", // Set background to transparent for a normal text look
                                    color: "white", // Change text color to white
                                    marginTop: "20px" 
                                }} 
                                variant="text" // Use variant="text" for a button that looks like text
                            >
                                Home
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Button style={{ width: "100%", background: "#1A3668", marginTop: "20px" }} variant="contained" onClick={() => handleComponentChange('departments')}>
                            Departments
                        </Button>
                    </ListItem>
                    <ListItem disablePadding>
                        <Button style={{ width: "100%", background: "#1A3668", marginTop: "20px" }} variant="contained" onClick={() => handleComponentChange('applications')}>
                            Applications
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {showWelcome && (
                    <Typography paragraph>
                        <h1>Welcome to Dashboard</h1>
                    </Typography>
                )}
                <Typography paragraph>
                    {renderActiveComponent()}
                </Typography>
            </Box>
        </Box>
    );
}
