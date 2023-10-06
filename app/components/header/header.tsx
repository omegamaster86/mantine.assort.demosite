'use client';
import { useState } from 'react';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';


const links = [
  { link: '/about', label: 'Features' },
  { link: '/', label: 'ダッシュボード' },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      href="http://localhost:3000/"
      className='block leading-none py-2 px-3 no-underline font-extrabold rounded text-white'
      data-active={active === link.link || undefined}
      variant="gradient"
      gradient={{ from: 'red', to: 'grape' }}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className='h-14 pt-7'>
      <Container size="md" className='h-14 flex justify-between items-center'>
        <MantineLogo size={28} />
            <Group gap={5} visibleFrom="xs">
                  {items}
            </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}