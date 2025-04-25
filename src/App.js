import React from 'react';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'; // Import ajouté

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2d2d',
    },
    secondary: {
      main: '#f5f5f5',
    },
    accent: {
      main: '#0066cc',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    h1: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '2rem',
      margin: '2rem 0 1rem',
    },
  },
});

function App() {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar onNavClick={handleNavClick} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Box id="about" sx={{ py: 8, px: 3 }}>
            <About />
          </Box>
          
          <Box id="skills" sx={{ py: 8, px: 3, bgcolor: 'secondary.main' }}>
            <Skills />
          </Box>
          
          <Box id="projects" sx={{ py: 8, px: 3 }}>
            <Projects />
          </Box>
          
          <Box id="contact" sx={{ py: 8, px: 3, bgcolor: 'secondary.main' }}>
            <Contact />
          </Box>
        </Box>

        <Footer /> {/* Footer ajouté ici */}
      </Box>
    </ThemeProvider>
    
  );
}

export default App;