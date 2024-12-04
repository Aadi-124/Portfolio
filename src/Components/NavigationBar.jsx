
import './Portfolio.css';
import './Responsive.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function NavigationBar() {



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      style={{backgroundColor:"black"}}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{backgroundColor:"black"}}
    >



      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
      <List>

        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon style={{color:"#0aabd3"}}/>
              </ListItemIcon>
              <a href="#ProfileSection" className='sidebarbtn'>PROFILE</a>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountTreeIcon  style={{color:"green"}}/>
              </ListItemIcon>
            <a href="#ProjectsSection" className='sidebarbtn'>PROJECTS</a>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmojiEventsIcon  style={{color:"yellow"}}/>
              </ListItemIcon>
            <a href="#AchievementsSection" className='sidebarbtn'>ACHIEVEMENTS</a>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactsIcon  style={{color:"orange"}}/>
              </ListItemIcon>
              <a href="#ContactsSection" className='sidebarbtn'>CONTACT</a>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon  style={{color:"blue"}}/>
              </ListItemIcon>            
              <a href="#AboutSection" className='sidebarbtn'>ABOUT</a>
              <ListItemText />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (

    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
  
     <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    
    </ThemeProvider>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{"backgroundColor":"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            
            component="div"
          >
            <p className='navHeading'> AADITYA THAKARE </p>
          </Typography>  
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <a href="#ProfileSection" className='navbarbtn'>PROFILE</a>
            <a href="#ProjectsSection" className='navbarbtn'>PROJECTS</a>
            <a href="#AchievementsSection" className='navbarbtn'>ACHIEVEMENTS</a>
            <a href="#ContactsSection" className='navbarbtn'>CONTACT</a>
            <a href="#AboutSection" className='navbarbtn'>ABOUT</a>
            
            
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </>
  );
}