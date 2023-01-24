import Head from 'next/head'
import MainMenu from '@/components/MainMenu'
import ParticlesTest from '@/components/ParticlesTest'

export default function Home() {

  const onItemSelect = (item: 'About') => {

  }

  return (
    <>
      <Head>
        <title>Vasilis Litsas portfolio website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticlesTest />

      <MainMenu onItemSelect={onItemSelect} />
    </>
  )
}
