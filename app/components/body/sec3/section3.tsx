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
  import { IconClick, IconHash, IconNumber3, IconBrandSlack } from '@tabler/icons-react';
  import Balancer from 'react-wrap-balancer'
  import { Video3 } from '../../youtube/video';
  
  const mockdata = [
    {
      title: 'ワンクリックで出勤',
      description:
        'Slack上でワンクリックで出勤できます。コマンド入力すら不要です。',
      icon: IconClick,
    },
    {
      title: 'チャンネルごとの勤怠',
      description:
        'プロジェクトやチームごとに勤怠を分けて管理することができます。',
      icon: IconHash,
    },
    {
      title: '管理画面はSlackログインで',
      description:
        '管理画面はSlackログインが使えるため、パスワード管理が要りません。',
      icon: IconBrandSlack,
    },
  ];
  
  export const FeaturesCards3 = () => {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className="border-solid" padding="1.5rem">
        <feature.icon
          style={{ width: rem(50), height: rem(50), }}
          stroke={1.5}
        />
        <Text fz="lg" fw={700} mt="15px" className=" after:content-[''] after:block after:bg-regal-pink after:w-11 after:h-0.5 after:my-3">
          {feature.title}
        </Text>
        <Text fz="md">
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
                <IconNumber3/>
            </ThemeIcon>
        </Group>
        <Group justify="center" >
            <Text fw={800} fz={35} variant="gradient" gradient={{ from: 'red', to: 'grape' }} >
                /timetracker
            </Text>
        </Group>
  
        <Title order={1} fw={900} fz={50} ta="center" mt="sm">
            効率的な勤怠管理
        </Title>
  
        <Text fz={20} ta="center" mt="md" >
            <Balancer>スプレッドシートでアルバイトや業務委託の勤怠管理をしていませんか？</Balancer>{' '}
            <Balancer>Assortは無駄な手作業を自動化し、時間と手間を大幅に削減します。</Balancer>
        </Text>

        <AspectRatio ratio={16 / 9} mt="4rem" w="100%">
            <Video3/>
        </AspectRatio>

        <Group justify="center" pt={"5rem"}>
          <Badge variant="gradient" gradient={{ from: 'red', to: 'grape' }} size="xl" >
                FEATURES
          </Badge>
        </Group>
  
        <Title order={1} fw={900} fz={50} ta="center" mt="sm" >
            Slackベースのデザイン
        </Title>

        <Text fz={20} ta="center" mt="md" >
            <Balancer>Slackを中心に設計されており、直感的な操作が可能です。</Balancer>
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }