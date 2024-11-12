import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBriefcase } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.text}>Made by Rahul</div>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/Sri-Rahul"
            target="_blank"
          >
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://srirahul.netlify.app/"
            target="_blank"
          >
            <IconBriefcase style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/sri-rahul-n/"
            target="_blank"
          >
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}