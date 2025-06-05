import React from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StorageIcon from '@mui/icons-material/Storage';

export default function Skills(){

  return(
    <div>
       <Box sx={{ mb: 3}} >
     <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ color: 'white',}}
      >
        Mes Compétences
      </Typography>
     <Box sx={{ width: 100, height: 3, backgroundColor: '#20C997', margin: '10px auto 0' }}/>
     <Typography color='grey' textAlign={'center'}mt={2}>Découvrez mes compétences techniques.</Typography>

     <Typography mt={2} textAlign={'center'} color='white' fontSize={15}>Etant un developpeur front-end je maitrise les technologies de developpement d'interface fluide et responsive.</Typography>
     <Typography color='white'>Mes compétences en developpement</Typography>

        </Box>
    </div>
  )
}
