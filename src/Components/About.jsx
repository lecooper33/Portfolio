import { Box, Typography, Link } from '@mui/material';

function About() {
    return (
        <div id="About" style={{ padding: '50px 20px', backgroundColor: '#1A1A1A', height:'65vh' }}>
            <Box textAlign="center" mb={5}>
                <Typography variant="h4" color="white" fontWeight="bold">
                    Apprenez à mieux me connaître
                </Typography>
                <Box 
                    sx={{ width: 100, height: 3, backgroundColor: '#20C997', margin: '10px auto 0' }}
                />
            </Box>

            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={5} alignItems="start">
                
                {/* Partie gauche : Texte de présentation */}
                <Box flex={2}>
                    <Typography variant="h5" color="white" fontWeight="bold" mb={2}>
                        Je suis <span style={{ color: '#20C997' }}>Garland Brel</span>, développeur Front-end
                    </Typography>

                    <Typography color="grey" mb={2}>
                        Salut, je suis Brel ! Je m'appelle Brel, je suis un développeur front-end débutant,
                        passionné par la création d'interfaces utilisateur modernes et réactives.
                    </Typography>

                    <Typography color="grey" mb={2}>
                        J'utilise HTML, CSS, JavaScript et React pour créer des interfaces web stylées,
                        intuitives et inoubliables. Actuellement en phase d'apprentissage, 
                        je cherche à acquérir de l'expérience sur des projets concrets.
                    </Typography>
                </Box>

                {/* Partie droite : Infos personnelles */}
                <Box flex={1} display="flex" flexDirection="column" gap={2} color="white">
                    <Box display="flex" gap={3} borderBottom="1px solid grey" pb={1}>
                        <Typography fontWeight="bold">Nom :</Typography>
                        <Typography>Garland Brel</Typography>
                    </Box>
                    <Box display="flex" gap={3} borderBottom="1px solid grey" pb={1}>
                        <Typography fontWeight="bold">Courriel :</Typography>
                        <Link 
                            href="mailto:garlandbrel@gmail.com" 
                            underline="none" 
                            color="#20C997"
                        >
                            garlandbrel@gmail.com
                        </Link>
                    </Box>
                    <Box display="flex" gap={3} borderBottom="1px solid grey" pb={1}>
                        <Typography fontWeight="bold">Âge :</Typography>
                        <Typography>23 ans</Typography>
                    </Box>
                    <Box display="flex" gap={3}>
                        <Typography fontWeight="bold">De :</Typography>
                        <Typography>Port-Gentil, Gabon</Typography>
                    </Box>
                </Box>

            </Box>
        </div>
    );
}

export default About;
