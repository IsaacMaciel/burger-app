import { useState } from 'react';
import classes from '@/helpers/classes';
import useCurrentHash from './useCurrentHash';

import styles from './index.module.css';

export default function Header() {
  const currentHash = useCurrentHash();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const mobileTitleMap: Record<string, string> = {
    '#menu': 'Menu',
    '#entrar': 'Entrar',
    '#contato': 'Contato',
  };

  return (
    <header className={styles.header}>
      <h1 className={styles['mobile-title']}>{mobileTitleMap[currentHash] || 'Menu'}</h1>

      <button
        className={classes(styles['burger-button'], isMenuOpen && styles['burger-open'])}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className={styles['line-container']}>
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
        </div>
      </button>

      <nav className={classes(styles.navigation, isMenuOpen && styles['navigation-open'])}>
        <ul className={styles['nav-list']}>
          <li className={classes(styles['nav-item'], currentHash === '#menu' && styles.active)}>
            <a href="#menu" className={styles['nav-link']} onClick={handleLinkClick}>
              Menu
            </a>
          </li>
          <li className={classes(styles['nav-item'], currentHash === '#entrar' && styles.active)}>
            <a href="#entrar" className={styles['nav-link']} onClick={handleLinkClick}>
              Entrar
            </a>
          </li>
          <li className={classes(styles['nav-item'], currentHash === '#contato' && styles.active)}>
            <a href="#contato" className={styles['nav-link']} onClick={handleLinkClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
