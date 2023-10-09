
import { Container, Text, Button } from '@mantine/core';
import Balancer from 'react-wrap-balancer'
import Image from "next/image";
import { ExclamationMark } from 'tabler-icons-react';

export const Menu = () => {
 return (
    <div>
          <Button
          component="a"
          href="https://github.com/mantinedev/mantine"
          size="xl"
          className='h-15 px-9 mr-5'
          color="black"
          >
          <Image src="/assets/Slackicon.png" width={15} height={15} alt='logo' className=' mr-3'/>
          Slackに追加
          </Button>
          <Button
          component="a"
          href="https://github.com/mantinedev/mantine"
          size="xl"
          variant="gradient"
          gradient={{ from: 'red', to: 'grape' }}
          className='h-14 px-9'
          >
          ダッシュボード
          </Button>
    </div>
 )
}

const Attention = () => {
  return(
  <div>
    <div className=' py-3 mt-28 border-solid border-red-600 border'>
      <div className='flex font-bold justify-center items-center'>
            <ExclamationMark
              size={18}
              strokeWidth={2}
              color={'red'}
              className='border-solid rounded-full border-red-600'
            />
         <div className=' text-red-500 pl-3.5'><Balancer>既にAssortをお使いの方は、アプリをインストールし直す必要があります</Balancer></div>
      </div>
      <div><Balancer>アップデートによりアプリの再インストールが必要になりました。お手数ですが、</Balancer></div>{' '}
      <div><Balancer>「Slackに追加」ボタンから再度インストールをお願いいたします。</Balancer></div>
    </div>
  </div>
  )
}

export const Title= () => {
  return (
    <div className='relative box-border my-32 max-w-full mx-4 text-center m-0 sm:my-20'>
      <Container>
        <h1 className='text-5xl font-black p-0 max-w-full inline-block md:text-6xl lg:text-7xl'>
          <Text variant="gradient" gradient={{ from: 'red', to: 'grape' }} inherit>
              <Balancer>All-in-One App for Slack</Balancer>
          </Text>
        </h1>
        <div className="inline-block max-w-screen-md text-2xl">
            <Balancer>オールインワンのSlackアプリ Assort で生産性を向上しよう。Assort には業務効率化に役立つたくさんの機能が備わっています。</Balancer>
        </div>
        <div className='mt-12'>
          <Menu/>
        </div>
        <div className='w-4/5 mx-auto'>
          <Attention/>
        </div>
      </Container>
    </div>
  );
}