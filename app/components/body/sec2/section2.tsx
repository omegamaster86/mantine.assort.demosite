'use client'
import { Text, SimpleGrid, Container, rem, Group, ThemeIcon, Title, AspectRatio } from '@mantine/core';
import { IconNumber1, IconNumber2, IconNumber3, IconNumber4 } from '@tabler/icons-react';
import Balancer from 'react-wrap-balancer'
import { Video2 } from '../../youtube/video';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className='relative pt-8 pb-5'>
      <div className={`absolute top-0 left-0 z-10 w-36 h-20 bg-regal-pink opacity-10`} />

        <div className='relative z-20 left-6 -top-4 '>
            <Icon style={{ width: rem(38), height: rem(38) }}  stroke={1.5} className='text-red-600'/>
            <Text fw={900} fz="xl" mb="xs" mt={5} >
            {title}
            </Text>
            <Text  fz="md">
            {description}
            </Text>
        </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconNumber1,
    title: '複数投票',
    description:
      '複数の選択肢に投票できる機能もあります。',
  },
  {
    icon: IconNumber2,
    title: '選択肢の追加',
    description:
      '後で選択肢を追加する機能も。意見を集めるときに便利です。',
  },
  {
    icon: IconNumber3,
    title: '匿名投票',
    description:
      '匿名アンケートで、直接は伝えづらい意見も収集可能です。',
  },
  {
    icon: IconNumber4,
    title: '分析機能',
    description:
      '投票結果はグラフで直感的に見ることができます。',
  },
];

export const FeaturesAsymmetrical = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30}>
        <Container fluid py={60}>
        <Group justify="center">
            <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'red', to: 'grape' }}
                radius="xl"
                >
                <IconNumber2/>
            </ThemeIcon>
        </Group>
        <Group justify="center" >
            <Text fw={800} fz={35} variant="gradient" gradient={{ from: 'red', to: 'grape' }} >
                /poll
            </Text>
        </Group>
  
        <Title order={1} fw={900} fz={50} ta="center" mt="sm">
            社内アンケートを数秒で作成
        </Title>
  
        <Text fz={20} ta="center" mt="md" >
            <Balancer>Slackアプリで唯一の日本語に対応したアンケートアプリです。</Balancer>{' '}
            <Balancer>シンプル・イズ・ベストの哲学で作られており、非常に簡単に使えます。</Balancer>
        </Text>

        <AspectRatio ratio={16 / 9} mt="4rem" w="100%">
            <Video2/>
        </AspectRatio>
      </Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={40} mt="sm">
        {items}
      </SimpleGrid>
    </Container>
  );
}