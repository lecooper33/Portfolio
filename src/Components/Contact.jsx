import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const backgroundColor = '#09101A';
  const cardBackground = 'rgba(255, 255, 255, 0.05)';
  const textPrimary = '#FFFFFF';
  const textSecondary = 'rgba(255, 255, 255, 0.7)';
  const accentColor = '#55e6a5';

  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        width: '100%',
        padding: { xs: '3rem 1rem', md: '6rem 2rem' },
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(85, 230, 165, 0.15) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }
      }}
      id="contact"
    >
      <Box sx={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '4rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section de gauche - Informations */}
        <Box 
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h2" sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 3,
            position: 'relative',
            color: textPrimary,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: accentColor
            }
          }}>
            Design & Innovation
          </Typography>
          
          <Typography 
            component={motion.p}
            variants={itemVariants}
            sx={{
              fontSize: '1.1rem',
              color: textSecondary,
              mb: 4
            }}
          >
            Passionné par la création d'interfaces utilisateur modernes et intuitives, je mets mon expertise en design et développement au service de vos projets. Chaque ligne de code est pensée pour offrir une expérience exceptionnelle.
          </Typography>
          
          <Box sx={{ mt: 'auto' }}>
            <Typography 
              component={motion.div}
              variants={itemVariants}
              variant="h6" 
              sx={{ mb: 2, color: textPrimary }}
            >
              Contact direct :
            </Typography>
            
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <EmailIcon sx={{ mr: 1, color: accentColor }} />
              <Typography sx={{ color: textSecondary }}>
                <a href="mailto:garlandbrel@gmail.com" style={{ color: accentColor, textDecoration: 'none' }}>
                  garlandbrel@gmail.com
                </a>
              </Typography>
            </Box>
            
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <PhoneIcon sx={{ mr: 1, color: accentColor }} />
              <Typography sx={{ color: textSecondary }}>+241 074 94 34 77</Typography>
            </Box>
            
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LocationOnIcon sx={{ mr: 1, color: accentColor }} />
              <Typography sx={{ color: textSecondary }}>Port-Gentil, Gabon</Typography>
            </Box>
          </Box>
        </Box>

        {/* Section de droite - Formulaire */}
        <Box 
          component={motion.div}
          variants={cardVariants}
          sx={{
            flex: 1,
            backgroundColor: cardBackground,
            borderRadius: 2,
            padding: { xs: 2, md: 4 },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            '&:hover': {
              boxShadow: `0 8px 30px ${accentColor}33`
            }
          }}
        >
          {/* Halo lumineux pour le formulaire */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 0.6,
              transition: { duration: 0.5 }
            }}
            sx={{
              position: 'absolute',
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              borderRadius: '16px',
              background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
              zIndex: 0,
              pointerEvents: 'none',
              filter: 'blur(10px)'
            }}
          />
          
          <Typography 
            component={motion.div}
            variants={itemVariants}
            variant="h4" 
            sx={{ 
              mb: 3,
              fontWeight: 600,
              textAlign: 'center',
              color: textPrimary,
              position: 'relative',
              zIndex: 1
            }}
          >
            Envoyez-moi un message
          </Typography>
          
          <Box 
            component={motion.form}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              position: 'relative',
              zIndex: 1 
            }}
          >
            {['Votre nom', 'Votre email', 'Numéro de téléphone'].map((label, index) => (
              <motion.div key={label} variants={itemVariants}>
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  required={label !== 'Numéro de téléphone'}
                  type={label === 'Votre email' ? 'email' : 'text'}
                  sx={{
                    '& .MuiInputLabel-root': { color: textSecondary },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                      '&:hover fieldset': { borderColor: accentColor },
                      color: textPrimary
                    }
                  }}
                />
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Votre message"
                variant="outlined"
                required
                multiline
                rows={5}
                sx={{
                  '& .MuiInputLabel-root': { color: textSecondary },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                    '&:hover fieldset': { borderColor: accentColor },
                    color: textPrimary
                  }
                }}
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                startIcon={<EmailIcon sx={{ color: 'black' }} />}
                sx={{
                  mt: 1,
                  py: 1.5,
                  fontWeight: 'bold',
                  backgroundColor: accentColor,
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#45d695'
                  }
                }}
              >
                Envoyer le message
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;