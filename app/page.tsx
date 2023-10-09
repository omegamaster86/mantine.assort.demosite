import Image from 'next/image'
import {Header} from './components/header/header'
import {Title} from './components/title/title'
import {FeaturesCards1} from './components/body/sec1/section1'

export default function Home() {
  return (
    <main>
      <Header/>
      <Title/>
      <FeaturesCards1/>
    </main>
  )
}
