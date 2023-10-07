'use client';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';

const Menu = () => {
    return(
        <div>
            <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="md"
            className='h-14 px-9 mr-5'
            color="black"
            >
            Slackに追加
            </Button>
            <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="md"
            variant="gradient"
            gradient={{ from: 'red', to: 'grape' }}
            className='h-14 px-9'
            >
            ダッシュボード
            </Button>
        </div>
        );
}

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className='h-14 pt-7'>
      <Container size="md" className='h-14 flex justify-between items-center'>
        <MantineLogo size={28} />
            <Group gap={5} visibleFrom="xs">
              <Menu/>
            </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}