import Head from 'next/head'
import ParticlesTest from '@/components/ParticlesTest'
import styles from '../../styles/Home.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Inter } from '@next/font/google'
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Vasilis Litsas - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticlesTest />

      <main className={styles.main}>

        <div style={{ position: "absolute", top: 30, left: 30, cursor: "pointer" }} className="flex-center-y" onClick={() => router.back()}>
          <KeyboardBackspaceIcon />&nbsp;Back
        </div>

        <div className={styles.titles}>
          <h1>About me</h1>
        </div>

        <div className={styles.center} style={{ width: '90%', maxWidth: 500, textAlign: 'justify', alignItems: "initial", lineHeight: '1.4rem' }}>
          <p>Hello dear visitor!</p>
          <p style={{ marginTop: 20 }}>I am a front end developer based in <b>Athens, Greece,</b> with 7 years of experience. My first 2 years as a developer, I was working on websites using <b>Wordpress</b>, before I moved to <b>React</b> apps. My previous job was working remotely at Architechts, a company based in the Netherlands.</p>
          <p style={{ marginTop: 20 }}>I am currently available for work.</p>

        </div>
        <div style={{ marginTop: 40, width: '90%', maxWidth: 500 }} className="flex-center-y">
          <p>For some additional info check out my LinkedIn profile! </p>
          <a href="https://www.linkedin.com/in/vasilis-litsas/" target="_blank"><LinkedInIcon style={{ fontSize: 42, color: "#064787" }} /></a>
        </div>

        <div style={{ position: "absolute", bottom: 20, textAlign: "center" }}>
          <p style={{ marginTop: 20 }}>For business inquiries contact me at:</p>
          <p style={{ marginTop: 5 }}>vasileios.litsas@gmail.com</p>
        </div>
      </main>

    </>
  )
}