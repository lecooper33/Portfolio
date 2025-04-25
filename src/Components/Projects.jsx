import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const projects = [
  {
    title: "Portfolio Professionnel",
    description: "Mon portfolio développé avec React et Material-UI pour présenter mes compétences et projets.",
    image: "/portfolio.jpg",
    link: "#",
    icon: <WebIcon fontSize="large" />
  },
  {
    title: "TchoPShap",
    description: "Site de restauration en développement, suivez-moi dans cette aventure.",
    image: "/assets/Container.png",
    link: "https://tchopshap-react.vercel.app/",
    icon: <ShoppingCartIcon fontSize="large" />
  },
  {
    title: "Moteur de Recherche",
    description: "Application de recherche avec filtres avancés et résultats en temps réel.",
    image: "/assets/recherche-gear-logo-vecteur-moteur-luv-icone-symbole-signe-illustration-isole_22345-824.avif",
    link: "https://genuine-crepe-254f01.netlify.app/",
    icon: <SearchIcon fontSize="large" />
  },
  {
    title: "Page WeChat",
    description: "Reproduction d'une interface utilisateur moderne pour une application de messagerie instantanée.",
    image: "/assets/WeChat-1200x702.jpg",
    link: "https://we-chat-plum.vercel.app/",
    icon: <ChatIcon fontSize="large" />
  }
];

const Projects = () => {
  const backgroundColor = '#09101A';
  const cardBackground = 'rgba(255, 255, 255, 0.05)';
  const textPrimary = '#FFFFFF';
  const textSecondary = 'rgba(255, 255, 255, 0.7)';
  const accentColor = '#55e6a5';

  // Variantes d'animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  // Variantes d'animation pour les éléments enfants
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

  // Variantes pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div id='projects'>
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
          background: 'radial-gradient(circle at 50% 50%, rgba(85, 230, 165, 0.1) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }
      }}
    >
      <Box sx={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Titre */}
        <Box 
          component={motion.div}
          variants={itemVariants}
        >
          <Typography variant="h2" sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 3,
            position: 'relative',
            display: 'inline-block',
            color: textPrimary,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: accentColor
            }
          }}>
            Mes Projets Récents
          </Typography>

          <Typography paragraph sx={{
            maxWidth: '800px',
            margin: '0 auto 4rem',
            fontSize: '1.1rem',
            color: textSecondary
          }}>
            Découvrez une sélection de mes réalisations techniques et créatives.
          </Typography>
        </Box>

        {/* Grille de projets */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6} 
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                maxWidth: '500px' 
              }}
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                style={{ width: '100%', position: 'relative' }}
                custom={index}
                transition={{ delay: index * 0.15 }}
              >
                {/* Halo lumineux */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.6,
                    transition: { duration: 0.5 }
                  }}
                  style={{
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
                
                <Card sx={{
                  width: '100%',
                  height: { xs: '350px', md: '350px' },
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: cardBackground,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    boxShadow: `0 8px 30px ${accentColor}33`,
                    borderColor: `${accentColor}66`
                  }
                }}>
                  <Box sx={{
                    height: '180px',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Box 
                      component={motion.div}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '3rem'
                      }}
                    >
                      {project.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      color: textPrimary
                    }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      mb: 3,
                      flexGrow: 1,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: textSecondary
                    }}>
                      {project.description}
                    </Typography>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outlined"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          mt: 'auto',
                          alignSelf: 'flex-start',
                          borderColor: accentColor,
                          color: accentColor,
                          '&:hover': {
                            backgroundColor: accentColor,
                            color: 'black'
                          }
                        }}
                      >
                        Voir le projet
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Section GitHub */}
        <Box 
          component={motion.div}
          variants={itemVariants}
          sx={{ 
            textAlign: 'center', 
            mt: 6,
            padding: { xs: '0 1rem', md: '0' }
          }}
        >
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            color: textPrimary
          }}>
            Découvrez plus de projets sur mon GitHub
          </Typography>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/lecooper33?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1rem',
                backgroundColor: accentColor,
                color: 'black',
                '&:hover': {
                  backgroundColor: '#45d695'
                }
              }}
            >
              Visiter mon GitHub
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default Projects;