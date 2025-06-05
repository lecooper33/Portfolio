import { Box, Paper, TextField, Typography, Button, IconButton } from '@mui/material';
import { GitHub, Email, Phone } from '@mui/icons-material';

function Contact() {
  return (
    <div id="contact" style={{ backgroundColor: '#343A40', color: 'white', padding: '50px 0' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 3 }}>
        {/* Titre */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h4" fontWeight="bold">Entrer en contact</Typography>
          <Box sx={{ width: 100, height: 3, backgroundColor: '#20C997', margin: '10px auto 0' }} />
        </Box>

        {/* Contenu */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          
          {/* Partie gauche */}
          <Box flex={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
            <Typography>
              Passionné par la création d'interfaces utilisateur modernes et intuitives,
              je mets mon expertise en conception et développement au service de vos projets.
              Chaque ligne de code est pensée pour offrir une expérience exceptionnelle.
            </Typography>
            <Typography variant="h6" fontWeight="bold">ADRESSE</Typography>
            <Typography>Port-Gentil, Gabon</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Phone sx={{ color: '#20C997', mr: 1 }} />
              <Typography>+241 074 94 34 77</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ color: '#20C997', mr: 1 }} />
              <Typography>garlandbrel@gmail.com</Typography>
            </Box>

            <Typography fontWeight="bold" sx={{ mt: 3 }}>SUIS-MOI</Typography>
            <Box>
              <IconButton
                href="https://github.com/lecooper33?tab=repositories"
                target="_blank"
                sx={{ color: '#20C997' }}
              >
                <GitHub />
              </IconButton>
            </Box>
          </Box>

          {/* Partie droite */}
          <Box flex={1.5}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              ENVOYEZ-MOI UN MESSAGE
            </Typography>
            <Paper sx={{ backgroundColor: '#343A40', p: 3 }} elevation={3}>
              <form
                action="mailto:garlandbrel@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <Box display="flex" gap={2} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                  <TextField
                    label="Nom"
                    variant="filled"
                    fullWidth
                    name="Nom"
                    InputProps={{ style: { backgroundColor: '#232A31', color: 'white' } }}
                  />
                  <TextField
                    label="E-mail"
                    variant="filled"
                    fullWidth
                    name="Email"
                    InputProps={{ style: { backgroundColor: '#232A31', color: 'white' } }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Téléphone"
                    variant="filled"
                    fullWidth
                    name="Téléphone"
                    InputProps={{ style: { backgroundColor: '#232A31', color: 'white' } }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Parlez-nous davantage de vos besoins..."
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    name="Message"
                    InputProps={{ style: { backgroundColor: '#232A31', color: 'white' } }}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#20C997',
                    color: 'white',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '5px',
                    boxShadow: 3,
                    '&:hover': {
                      backgroundColor: '#1EB38A',
                    },
                  }}
                >
                  Envoyer un message
                </Button>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;

