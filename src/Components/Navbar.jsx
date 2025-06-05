import React from 'react';
import { Link } from 'react-scroll';
import { Box, Button, IconButton } from '@mui/material';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '180px',
                height: '100vh',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '20px',
                borderRight: '2px solid #20C997', 
            }}
        >
            {/* IMAGE */}
            <Box
                component="img"
                src="/path/to/your/image.jpg" // Remplace par ton image
                alt="Profile"
                sx={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '30px',
                    border: '2px solid #20C997',
                }}
            />

            {/* BOUTONS */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    overflow: 'hidden', // Empêche les boutons de dépasser
                }}
            >
                <Link to="Acceuil" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 0,
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#20C997',
                                color: 'black',
                                transform: 'scale(1.05)', // Agrandissement léger sans dépasser
                            },
                        }}
                    >
                        Accueil
                    </Button>
                </Link>

                <Link to="About" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 0,
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#20C997',
                                color: 'black',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        À propos
                    </Button>
                </Link>

                <Link to="Skills" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 0,
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#20C997',
                                color: 'black',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        Compétences
                    </Button>
                </Link>

                <Link to="Projects" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 0,
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#20C997',
                                color: 'black',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        Projets
                    </Button>
                </Link>

                <Link to="Contact" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 0,
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#20C997',
                                color: 'black',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        Contact
                    </Button>
                </Link>
            </Box>
            <Box>
                <IconButton href='https://github.com/lecooper33?tab=repositories' target='blank'
                
                > <FaGithub size={20} color="white"/></IconButton>
            </Box>
        </Box>
    );
}

export default Navbar;

