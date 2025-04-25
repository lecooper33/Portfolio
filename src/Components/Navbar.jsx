import React from 'react';
import { Box, Button, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ onNavClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const backgroundColor = '#09101A';
  const accentColor = '#55e6a5';
  const textPrimary = '#FFFFFF';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        padding: { xs: '1rem', md: '1rem 2rem' },
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: accentColor,
          fontWeight: 'bold',
          letterSpacing: '0.3em',
          marginRight: '2rem',
          zIndex: 1100,
          fontSize: { xs: '1.1rem', md: '1.25rem' }
        }}
      >
        BREL
      </Typography>
      
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: textPrimary }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1
        }}>
          {navItems.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
              <Button
                onClick={() => onNavClick(item.id)}
                sx={{
                  color: textPrimary,
                  mx: 1,
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  '&:hover': {
                    color: accentColor,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      )}

      {/* Menu mobile */}
      {isMobile && mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
            transition: 'all 0.3s ease',
          }}
        >
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    onNavClick(item.id);
                    setMobileOpen(false);
                  }}
                  sx={{
                    color: textPrimary,
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1.5rem',
                    '&:hover': {
                      color: accentColor,
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;