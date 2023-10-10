'use client'
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    ThemeIcon,
    AspectRatio,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconNumber1 } from '@tabler/icons-react';
  import Balancer from 'react-wrap-balancer'
  import { Video1 } from '../../youtube/video1';
  
  const mockdata = [
    {
      title: '設定レス・運用レス',
      description:
        'Slackアプリをインストールするだけで使えます。クラウドベースのため運用は一切要りません。',
      icon: IconGauge,
    },
    {
      title: 'プライバシーに配慮',
      description:
        '私達はお客様の対話データを一切保持しません。データ漏洩を心配する必要はありません。',
      icon: IconUser,
    },
  ];
  
  export const FeaturesCards1 = () => {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className="border-solid" padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className="after:content-[''] after:block after:bg-blue-600 after:w-11 after:h-0.5" mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container fluid py={60} bg={'#fff5f5'}>
        <Group justify="center">
            <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'red', to: 'grape' }}
                radius="xl"
                >
                <IconNumber1/>
            </ThemeIcon>
        </Group>
        <Group justify="center" >
            <Text fw={800} fz={35} variant="gradient" gradient={{ from: 'red', to: 'grape' }} >
                @assort
            </Text>
        </Group>
  
        <Title order={1} fw={900} fz={50} ta="center" mt="sm">
            SlackでChatGPTの力を最大限に
        </Title>
  
        <Text fz={20} ta="center" mt="md" >
            <Balancer>チーム全員で使えるChatGPTを考えたことはありますか？</Balancer>{' '}
            <Balancer>AIのチカラを最大限活用し、競合他社と差をつけましょう。</Balancer>
        </Text>

        <AspectRatio ratio={16 / 9} mt="4rem" w="100%">
            <Video1/>
        </AspectRatio>

        <Group justify="center" pt={"5rem"}>
          <Badge variant="gradient" gradient={{ from: 'red', to: 'grape' }} size="xl" >
                FEATURES
          </Badge>
        </Group>
  
        <Title order={1} fw={900} fz={50} ta="center" mt="sm" >
            AssortでChatGPTを使う理由
        </Title>
  
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }