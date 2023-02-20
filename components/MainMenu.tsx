import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import audioSelect from '../assets/menu-navigate-sound.mp3';
import audioNavigate from '../assets/menu-select.mp3';
import useKeypress from 'react-use-keypress';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MainMenu({ onItemSelect }) {
  const router = useRouter();

  const [MenuItemSelected, setMenuItemSelected] = useState<number>(1);

  useKeypress(['ArrowUp', 'ArrowDown', 'Enter'], (event) => {
    switch (event.key) {
      case 'ArrowUp':
        audioPlay('navigate');
        setMenuItemSelected(prev => prev === 1 ? 2 : prev - 1);
        break;
      case 'ArrowDown':
        audioPlay('navigate');
        setMenuItemSelected(prev => prev === 2 ? 1 : prev + 1);
        break;
      case 'Enter':
        handleItemSelect(MenuItemSelected);
        break;
      default:
        break;
    }
  });

  const handleItemSelect = (itemSelected) => {
    let link;
    switch (itemSelected) {
      case 1:
        link = '/about';
        break;
      case 2:
        link = '/projects';
        break;
      default:
        break;
    }
    audioPlay('select');
    router.push(link);
  }

  const hoverHandler = (itemNumber: number) => {
    setMenuItemSelected(itemNumber);
    audioPlay('navigate');
  }

  const audioPlay = (sfxName: 'navigate' | 'select') => {
    switch (sfxName) {
      case 'navigate':
        new Audio(audioNavigate).play();
        break;
      case 'select':
        new Audio(audioSelect).play();
        break;
      default:
        break;
    }
  }

  return (
    <main className={styles.main}>
      {/* <ParticlesTest /> */}

      <div className={styles.titles}>
        <h1 className={styles.big_title}>Vasilis Litsas</h1>
        <h4 style={{ marginTop: 10 }}>Web developer</h4>
      </div>

      <div className={styles.center} style={{ marginTop: 30 }}>
        <div onMouseEnter={() => hoverHandler(1)} onClick={() => handleItemSelect(1)} className={`${styles.menuitem} ${MenuItemSelected === 1 ? styles.selected : ''}`}>
          <h2 className={inter.className}>About me</h2>
        </div>
        <div onMouseEnter={() => hoverHandler(2)} onClick={() => handleItemSelect(2)} className={`${styles.menuitem} ${MenuItemSelected === 2 ? styles.selected : ''}`}>
          <h2 className={inter.className}>Code & Projects</h2>
        </div>

      </div>


      <div style={{ position: "absolute", bottom: 20, textAlign: "center" }}>
        <p style={{ marginTop: 20 }}>For business inquiries contact me at:</p>
        <p style={{ marginTop: 5 }}>vasileios.litsas@gmail.com</p>
      </div>
    </main>
  )
}
export default MainMenu