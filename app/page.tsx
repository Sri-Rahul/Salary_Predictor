'use client';

import { Container,Box, Paper } from '@mantine/core';
import { HeroTitle } from '../src/components/HeroSection';
import SalaryPrediction from '../src/components/SalaryPredictor';

export default function Home() {
  return (
    <Box 
      pos="relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #1A1B1E 0%, #25262B 100%)',
      }}
    >      
      <Container size="xl" pos="relative" style={{ zIndex: 1 }}>
        <Box py={{ base: 'xl', md: '6rem' }}>
          <HeroTitle />
        </Box>
        
        <Paper 
          shadow="md" 
          radius="lg" 
          p={{ base: 'md', md: 'xl' }}
          bg="dark.7"
          style={{
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(26, 27, 30, 0.85)',
          }}
        >
          <SalaryPrediction />
        </Paper>
      </Container>
    </Box>
  );
}