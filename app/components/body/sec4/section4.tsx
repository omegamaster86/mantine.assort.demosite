import { Group, Text } from '@mantine/core';
import Image from 'next/image'
import { Menu } from '../../title/title'

export const Section4 = () => {
  return (
    <div className="py-28 gap-10">
        <div className="px-4 mx-auto w-full max-w-6xl">
            <Group justify="space-between">
                <div>
                    <h1 className='font-black text-4xl lg:text-6xl'>料金</h1>
                    <div className='mt-4 mb-6 text-xl lg:text-2xl'>現在無料でご利用いただけます。</div>
                    <Menu/>
                </div>
                <div>
                    <Image src="/assets/teamwork.svg" width={350} height={260} alt="logo"/>
                </div>
            </Group>
        </div>
    </div>
  )
}
