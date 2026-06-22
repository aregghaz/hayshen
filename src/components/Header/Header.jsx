import { useEffect, useState } from 'react';
import '@/components/Header/header.scss';
import { HayShenLogo } from '@/components/icons/HayShenLogo';

const navigation = [
  { label: 'Գլխավոր', href: '#home' },
  { label: 'Ծառայություններ', href: '#services' },
  { label: 'Տեխնիկա', href: '#equipment' },
  { label: 'Մեր մասին', href: '#about' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`appHeader${isScrolled ? ' appHeader--scrolled' : ''}`}>
      <div className="appHeader__container">
        <a className="logoBox" href="#home" aria-label="HayShen">
          <HayShenLogo
            className="appHeader__logo"
            role="img"
            aria-label="HayShen"
          />
        </a>

        <nav className="menuBox" aria-label="Հիմնական նավիգացիա">
          <ul className="appHeader__menu">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a
                  className={index === 0 ? 'is-active' : undefined}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="buttonsBox">
          <a className="appHeader__button appHeader__button--outline" href="#login">
            Մուտք գործել
          </a>
          <a className="appHeader__button appHeader__button--filled" href="#register">
            Գրանցվել
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
