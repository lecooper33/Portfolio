import React from 'react';
import { Box, Typography, Link, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const backgroundColor = '#09101A';
  const accentColor = '#55e6a5';
  const textPrimary = '#FFFFFF';
  const textSecondary = 'rgba(255, 255, 255, 0.7)';

  return (
    <Box component="footer" sx={{
      backgroundColor: backgroundColor,
      color: textPrimary,
      py: 4,
      px: 2,
      textAlign: 'center',
      borderTop: `1px solid rgba(255, 255, 255, 0.1)`
    }}>
      <Box sx={{ 
        mb: 3,
        display: 'flex',
        justifyContent: 'center',
        gap: 2
      }}>
        <motion.div whileHover={{ y: -3 }}>
          <IconButton 
            href="https://github.com/lecooper33" 
            target="_blank" 
            sx={{ 
              color: textSecondary,
              '&:hover': { 
                color: accentColor,
                backgroundColor: 'rgba(85, 230, 165, 0.1)'
              }
            }}
          >
            <GitHub fontSize="medium" />
          </IconButton>
        </motion.div>
        
        <motion.div whileHover={{ y: -3 }}>
          <IconButton 
            href="mailto:garlandbrel@gmail.com" 
            sx={{ 
              color: textSecondary,
              '&:hover': { 
                color: accentColor,
                backgroundColor: 'rgba(85, 230, 165, 0.1)'
              }
            }}
          >
            <Email fontSize="medium" />
          </IconButton>
        </motion.div>
        
        {/* Ajoutez LinkedIn si vous avez un profil */}
        {/* <motion.div whileHover={{ y: -3 }}>
          <IconButton 
            href="[VOTRE_LIEN_LINKEDIN]" 
            target="_blank"
            sx={{ 
              color: textSecondary,
              '&:hover': { 
                color: accentColor,
                backgroundColor: 'rgba(85, 230, 165, 0.1)'
              }
            }}
          >
            <LinkedIn fontSize="medium" />
          </IconButton>
        </motion.div> */}
      </Box>
      
      <Typography variant="body1" sx={{ 
        mb: 2,
        fontWeight: 500,
        color: textPrimary
      }}>
        © {new Date().getFullYear()} Brel - Développeur Front-End
      </Typography>
      
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
        mb: 2
      }}>
        <Link 
          href="#about" 
          sx={{ 
            color: textSecondary,
            '&:hover': { 
              color: accentColor,
              textDecoration: 'none'
            }
          }}
        >
          À propos
        </Link>
        <span>•</span>
        <Link 
          href="#skills" 
          sx={{ 
            color: textSecondary,
            '&:hover': { 
              color: accentColor,
              textDecoration: 'none'
            }
          }}
        >
          Compétences
        </Link>
        <span>•</span>
        <Link 
          href="#projects" 
          sx={{ 
            color: textSecondary,
            '&:hover': { 
              color: accentColor,
              textDecoration: 'none'
            }
          }}
        >
          Projets
        </Link>
        <span>•</span>
        <Link 
          href="#contact" 
          sx={{ 
            color: textSecondary,
            '&:hover': { 
              color: accentColor,
              textDecoration: 'none'
            }
          }}
        >
          Contact
        </Link>
      </Box>
      
      <Typography variant="body2" sx={{ 
        color: textSecondary,
        fontSize: '0.8rem'
      }}>
        Conçu et développé avec Material-UI
      </Typography>
    </Box>
  );
};

export default Footer;