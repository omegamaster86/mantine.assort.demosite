import Image from 'next/image'
import {Header} from './components/header/header'
import {Title} from './components/title/title'
import {FeaturesCards1} from './components/body/sec1/section1'
import {FeaturesAsymmetrical} from './components/body/sec2/section2'
import {FeaturesCards3} from './components/body/sec3/section3'

export default function Home() {
  return (
    <main>
      <Header/>
      <Title/>
      <FeaturesCards1/>
      <FeaturesAsymmetrical/>
      <FeaturesCards3/>
    </main>
  )
}
