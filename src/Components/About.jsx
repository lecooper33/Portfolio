import React from 'react';
import { Box, Typography, Avatar, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const accentColor = '#55e6a5';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variantes d'animation pour le conteneur
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

  // Variantes d'animation pour les éléments enfants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation de balancement pour l'image
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id='about'>
      <Box sx={{
        width: '100%',
        padding: { xs: '1rem 1rem', md: '4rem 2rem' },
        backgroundColor: '#09101A'
      }}>
        <Box 
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: { xs: 'center', md: 'right' },  
          }}
        >
          <Box 
            component={motion.div}
            variants={itemVariants}
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row-reverse' },
              alignItems: 'center', 
              gap: { xs: 3, md: 6 } ,
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transform:'rotate(50deg)',
                ...(!isMobile && floatingAnimation)
              }}
              transition={{ 
                duration: 0.7,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              style={{
                position: 'relative',
                width: isMobile ? 250 : 350,
                height: isMobile ? 250 : 350,
                margin: isMobile ? '0 auto' : '0',
                borderRadius: isMobile ? '20px' : '20%',
                overflow: 'hidden',
                border: `10px solid ${accentColor}`,
                transform: isMobile ? 'rotate(0deg)' : 'rotate(45deg)',
                boxShadow: isMobile ? `0 0 20px ${accentColor}` : 'none',
                
              }}
            >
              <Box
                sx={{
                  width: isMobile ? '100%' : '142%',
                  height: isMobile ? '100%' : '142%',
                  position: 'absolute',
                  left: isMobile ? '0' : '-21%',
                  top: isMobile ? '0' : '-21%',
                  transform: isMobile ? 'rotate(0deg)' : 'rotate(-45deg)',
                  
                }}
              >
                <Avatar
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'center',  transform:'rotate(-10deg)'

                  }}
                  src="/assets/brel.jpg"
                  alt="Brel"
                />
              </Box>
              {/* Halo de lumière pour mobile */}
              {isMobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    boxShadow: `0 0 30px 15px ${accentColor}`,
                    opacity: 0.3,
                    zIndex: -1
                  }}
                />
              )}
            </motion.div>
            
            <Box 
              component={motion.div}
              variants={containerVariants}
              sx={{ 
                maxWidth: '600px',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Box component={motion.div} variants={itemVariants}>
                <Typography variant="h1" sx={{
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 'bold',
                  mb: 4,
                  color: 'white',
                  lineHeight: 1.2
                }}>
                  Salut, je suis Brel !<br />
                  <Box component="span" sx={{ color: accentColor }}>Développeur Front-end</Box>
                </Typography>
              </Box>
              
              <Box component={motion.div} variants={itemVariants}>
                <Typography paragraph sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  mb: 3, color:'white'
                }}>
                  Je m'appelle Brel, je suis un développeur front-end débutant.
                </Typography>
              </Box>
              
              <Box component={motion.div} variants={itemVariants}>
                <Typography paragraph sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  mb: 3, color:'white'
                }}>
                  Passionné par la création d'interfaces utilisateur modernes et réactives,
                  j'utilise le HTML, CSS, JavaScript et React. Pour des interfaces web stylées, intuitives et inoubliables.
                </Typography>
              </Box>
              
              <Box component={motion.div} variants={itemVariants}>
                <Typography paragraph sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  mb: 4, color:'white'
                }}>
                  Actuellement en phase d'apprentissage, je cherche à acquérir de l'expérience
                  sur des projets concrets.
                </Typography>
              </Box>
              
              <Box component={motion.div} variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    onClick={scrollToContact}
                    startIcon={<ArrowDownwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 'bold',
                      backgroundColor: accentColor,
                      color: 'black',
                      '&:hover': {
                        backgroundColor: '#45d695'
                      }
                    }}
                  >
                    Contactez-moi
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;