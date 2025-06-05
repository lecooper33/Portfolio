import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';




const projects = [
  { 
    img: {
      src: "/assets/Container.png", 
      alt: "Projet Tchopshap"      
    },
    name: 'Tchopshap', 
    link: {
      href: 'https://tchopshap-react.vercel.app/'
    }, 
    description: 'Tchopshap est un projet React en cours de développement. Suivez-moi dans cette aventure.'
  },
  {
    img: {
      src: "/assets/recherche-gear-logo-vecteur-moteur-luv-icone-symbole-signe-illustration-isole_22345-824.avif", 
      alt: 'Moteur de recherche'
    },
    name: 'Moteur de recherche', 
    link: {
      href: 'https://genuine-crepe-254f01.netlify.app/'
    },
    description: 'Exercice pour créer une application de recherche avec filtres avancés et résultats en temps réel.'
  },
  {
    img: {
      src: '/assets/brel.jpg', 
      alt: 'Portfolio'
    },
    name: 'Mon portfolio',
    description: 'Mon portfolio développé avec React et Material-UI pour présenter mes compétences et projets.'
  },
  {
    img:{src:'/assets/WeChat-1200x702.jpg', alt:'Wechat'},
    name:'Wechat',
    link:{href:'https://we-chat-plum.vercel.app/'},
    description: "Reproduction d'une interface utilisateur moderne pour une application de messagerie instantanée."
}
];

function Projects() {
  return (
    <Box sx={{ minHeight: '100vh', py: 8,  }}>
      {/* Titre */}
     
     <Box sx={{ mb: 3}} >
     <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ color: 'white',}}
      >
        Mes Projets
      </Typography>
     <Box sx={{ width: 100, height: 3, backgroundColor: '#20C997', margin: '10px auto 0' }}/>
     <Typography color='grey' textAlign={'center'}mt={2}>Découvrez une sélection de mes réalisations techniques et créatives.</Typography>
        </Box>
        

      {/* Cartes des projets */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 3 
        }}
      >
        {projects.map((project, index) => (
          <Card 
            key={index} 
            sx={{ 
              width: 400, 
              backgroundColor: '#1e1e1e', 
              color: 'white',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            {/* Image du projet */}
            <CardMedia
              component="img"
              height="200"
              image={project.img.src}
              alt={project.img.alt}
            />

            {/* Contenu du projet */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>

              <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
                {project.description}
              </Typography>

              {/* Affiche le bouton uniquement si un lien existe */}
              {project.link && (
                <Button 
                  variant="contained" 
                  href={project.link.href} 
                  target="_blank"
                  sx={{ backgroundColor: '#20C997', color: 'white' }}
                  fullWidth
                >
                  Voir le projet
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

     <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
      <Typography variant='h5' textAlign={'center'}mb={5}  mt={4} color='white'>Découvrez plus de projets sur mon GitHub</Typography>
      <Button href='https://github.com/lecooper33?tab=repositories'  target='blank'
      sx={{backgroundColor:'#45D695', color:'black', fontWeight:'bold', padding:'10px 20px', gap:'5px'}} 
      > <FaGithub size={20} color="black" /> Visiter mon GitHub </Button>
      </Box>
    </Box>
  );
}

export default Projects;
