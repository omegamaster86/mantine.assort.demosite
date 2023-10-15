'use client';
import { Container, Button } from '@mantine/core';
import Image from "next/image";

export const Menu = () => {
    return(
        <div>
            <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="md"
            className='h-15 px-9 mr-5'
            color="black"
            >
            <Image src="/assets/Slackicon.png" width={15} height={15} alt='logo' className=' mr-3'/>
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

  return (
    <header className='h-14 pt-7'>
      <Container size="md" className='h-14 flex justify-between items-center'>
        <div className=' text-5xl font-black'>Assort</div>
        <Menu/>
      </Container>
    </header>
  );
}