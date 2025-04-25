import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const skills = [
  { name: 'HTML', level: 80, icon: <HtmlIcon fontSize="large" /> },
  { name: 'CSS', level: 65, icon: <CssIcon fontSize="large" /> },
  { name: 'JavaScript', level: 40, icon: <JavascriptIcon fontSize="large" /> },
  { name: 'React', level: 30, icon: <CodeIcon fontSize="large" /> },
  { name: 'Material-UI', level: 30, icon: <ColorLensIcon fontSize="large" /> },
];

const SkillBar = ({ level, color }) => {
  return (
    <Box sx={{
      width: '100%',
      height: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 5,
      overflow: 'hidden',
      boxShadow: 1,
      position: 'relative'
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        style={{
          height: '100%',
          background: color,
          borderRadius: 5,
          position: 'absolute'
        }}
      />
    </Box>
  );
};

const Skills = () => {
  const theme = useTheme();
  const backgroundColor = '#09101A';
  const cardBackground = 'rgba(255, 255, 255, 0.05)';
  const textPrimary = '#FFFFFF';
  const textSecondary = 'rgba(255, 255, 255, 0.7)';

  const skillColors = {
    'HTML': '#E44D26',
    'CSS': '#264DE4',
    'JavaScript': '#F0DB4F',
    'React': '#61DAFB',
    'Material-UI': '#007FFF'
  };

  // Variantes d'animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Variantes pour les cartes de compétences
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box sx={{
      width: '100%',
      padding: { xs: '3rem 1rem', md: '6rem 2rem' },
      backgroundColor: backgroundColor,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box 
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Titre */}
        <Box 
          component={motion.div}
          variants={itemVariants}
          sx={{ textAlign: 'center', mb: 4 }}
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
              backgroundColor: skillColors['React']
            }
          }}>
            Mes Compétences
          </Typography>

          <Typography paragraph sx={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1.1rem',
            color: textSecondary
          }}>
            Spécialisé dans le développement front-end, je maîtrise les technologies clés pour créer des interfaces web modernes, réactives et accessibles.
          </Typography>
        </Box>

        {/* Grille de compétences */}
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
              key={skill.name}
              sx={{ display: 'flex', width: '200px' }}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                style={{ width: '100%', position: 'relative' }}
                custom={index} // Pour un délai indexé
                transition={{ delay: index * 0.1 }}
              >
                {/* Halo lumineux */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.8,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '8px',
                    background: `radial-gradient(circle at center, ${skillColors[skill.name]} 0%, transparent 70%)`,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />
                
                <Box sx={{
                  backgroundColor: cardBackground,
                  borderRadius: 2,
                  p: 3,
                  height: '100%',
                  minHeight: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    boxShadow: `0 8px 30px ${skillColors[skill.name]}33`,
                    transform: 'translateY(-5px)',
                    borderColor: `${skillColors[skill.name]}66`
                  }, 
                  cursor: 'pointer'
                }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box 
                      component={motion.div}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      sx={{
                        color: skillColors[skill.name],
                        mb: 2,
                        fontSize: '3rem',
                        display: 'flex',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography variant="h5" sx={{
                      fontWeight: 600,
                      color: skillColors[skill.name],
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        textShadow: `0 0 8px ${skillColors[skill.name]}`
                      }
                    }}>
                      {skill.name}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{
                      mb: 2,
                      color: textSecondary,
                      textAlign: 'center',
                      minHeight: '40px'
                    }}>
                      {skill.name === 'HTML' && 'Structure web'}
                      {skill.name === 'CSS' && 'Stylisation'}
                      {skill.name === 'JavaScript' && 'Interactivité'}
                      {skill.name === 'React' && 'Framework frontend'}
                      {skill.name === 'Material-UI' && 'Design system'}
                    </Typography>
                    <SkillBar level={skill.level} color={skillColors[skill.name]} />
                    <Typography variant="body2" sx={{
                      mt: 1,
                      textAlign: 'right',
                      color: textSecondary
                    }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;