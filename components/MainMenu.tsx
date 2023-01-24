import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
import audioSelect from '../assets/menu-navigate-sound.mp3';
import audioNavigate from '../assets/menu-select.mp3';
import useKeypress from 'react-use-keypress';

const inter = Inter({ subsets: ['latin'] })

function MainMenu({ onItemSelect }) {
  const [MenuItemSelected, setMenuItemSelected] = useState<number>(1);

  useKeypress(['ArrowUp', 'ArrowDown', 'Enter'], (event) => {
    switch (event.key) {
      case 'ArrowUp':
        audioPlay('navigate');
        setMenuItemSelected(prev => prev === 1 ? 3 : prev - 1);
        break;
      case 'ArrowDown':
        audioPlay('navigate');
        setMenuItemSelected(prev => prev === 3 ? 1 : prev + 1);
        break;
      case 'Enter':
        handleItemSelect();
        break;
      default:
        break;
    }
  });

  const handleItemSelect = () => {
    audioPlay('select');
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
        <h1>Vasilis Litsas</h1>
        <br />
        <h4>Welcome to my portfolio website</h4>
      </div>

      <div className={styles.center}>
        <div onMouseEnter={() => hoverHandler(1)} className={`${styles.menuitem} ${MenuItemSelected === 1 ? styles.selected : ''}`}>
          <h2 className={inter.className}>About me (CV)</h2>
        </div>
        <div onMouseEnter={() => hoverHandler(2)} className={`${styles.menuitem} ${MenuItemSelected === 2 ? styles.selected : ''}`}>
          <h2 className={inter.className}>App showcase</h2>
        </div>
        <div onMouseEnter={() => hoverHandler(3)} className={`${styles.menuitem} ${MenuItemSelected === 3 ? styles.selected : ''}`}>
          <h2 className={inter.className}>Contact</h2>
        </div>
      </div>


    </main>
  )
}
export default MainMenu