import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import classes from './title.module.css';

export const Title= () => {
  return (
    <div className='relative box-border m-0'>
      <Container  className='relative my-32 mx-0 sm:my-20'>
        <h1 className='text-4xl font-black p-0 m-0 md:text-6xl'>
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'grape' }} inherit>
              All-in-One App for Slack
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}