import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function Acceuil() {
  const roles = ['designer', 'développeur-web', 'freelance'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 70; // milliseconds per character
  const delayBeforeDeleting = 1500; // milliseconds
  const delayBeforeTyping = 500; // milliseconds

  useEffect(() => {
    let typingInterval;

    if (!isDeleting) {
      typingInterval = setInterval(() => {
        setDisplayedText(prev => roles[currentRoleIndex].substring(0, prev.length + 1));
        if (displayedText.length === roles[currentRoleIndex].length) {
          clearInterval(typingInterval);
          setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
        }
      }, typingSpeed);
    } else {
      typingInterval = setInterval(() => {
        setDisplayedText(prev => roles[currentRoleIndex].substring(0, prev.length - 1));
        if (displayedText.length === 0) {
          clearInterval(typingInterval);
          setIsDeleting(false);
          setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        }
      }, deletingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="acceuil">
      <Box>
        <Typography variant='h3' color='white' fontWeight={'bold'} ml={15}>
          Garland brel
        </Typography>
        <Typography color='white' ml={15} fontSize={30}>
          je suis <span style={{ textDecoration: 'underline' }}>{displayedText}</span> |
        </Typography>
      </Box>
    </div>
  );
}

export default Acceuil;