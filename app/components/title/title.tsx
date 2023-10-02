import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import classes from './title.module.css';
import Balancer from 'react-wrap-balancer'

export const Title= () => {
  return (
    <div className='relative box-border m-0'>
      <Container  className='relative my-32 mx-0 sm:my-20'>
        <h1 className='text-4xl font-black p-0 m-0 md:text-6xl'>
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'grape' }} inherit>
              <Balancer>All-in-One App for Slack</Balancer>
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
            <Balancer>
                Build fully functional accessible web applications with ease – Mantine includes more than
                100 customizable components and hooks to cover you in any situation
            </Balancer>
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