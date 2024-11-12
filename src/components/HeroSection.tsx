'use client';

import { Container, Text, Button, Group, Title, Box } from '@mantine/core';
import { IconBrandGithub, IconArrowRight } from '@tabler/icons-react';

export function HeroTitle() {
  return (
    <Box
      py={{ base: 'xl', md: '6rem' }}
      style={{
        position: 'relative',
      }}
    >
      <Container size="lg">
        <Title
          order={1}
          style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#fff',
          }}
        >
          Predict Your{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: '#339AF0', to: '#74C0FC', deg: 45 }}
            inherit
          >
            Starting Salary
          </Text>
        </Title>

        <Text
          size="xl"
          mb="xl"
          c="gray.3"
          style={{
            maxWidth: '800px',
            lineHeight: 1.6,
            fontSize: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          A fully featured React components and hooks library for predicting salaries
          based on your academic background and experience. Get accurate insights into
          your potential earnings.
        </Text>

        <Group gap="md">
          <Button
            size="xl"
            variant="gradient"
            gradient={{ from: '#339AF0', to: '#74C0FC', deg: 45 }}
            rightSection={<IconArrowRight size={20} />}
            styles={{
              root: {
                height: '3.5rem',
                padding: '0 2rem',
                fontSize: '1.1rem',
              },
            }}
          >
            Start Prediction
          </Button>

          <Button
            component="a"
            href="https://github.com/Sri-Rahul/Salary_Predictor"
            size="xl"
            variant="default"
            leftSection={<IconBrandGithub size={20} />}
            styles={{
              root: {
                height: '3.5rem',
                padding: '0 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              },
            }}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </Box>
  );
}