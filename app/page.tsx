import Image from 'next/image'
import {Header} from './components/header/header'
import {Title} from './components/title/title'

export default function Home() {
  return (
    <main>
      <Header/>
      <Title/>
    </main>
  )
}
