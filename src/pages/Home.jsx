import Navbar from '../Components/Navbar';
import { Box } from '@mui/material';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Acceuil from '../Components/Acceuil';
import Contact from '../Components/Contact';

function Home() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Box sx={{ marginLeft: '180px' }}> 
               <Box id="Acceuil" >
                <Acceuil />
                </Box>
                <Box id="About" sx={{ padding: '50px' }}>
                    <About />
                </Box>
                <Box id="Skills" sx={{ padding: '50px' }}>
                    <Skills />
                </Box>
                <Box id="Projects" sx={{ padding: '50px' }}>
                    <Projects />
                </Box>
                <Box id="Contact" sx={{ padding: '0px' }}>
                    <Contact/>
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;


