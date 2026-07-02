import { Camera, ExternalLink, Globe, Send, Video } from 'lucide-react';
import { HayShenLogo } from '@/components/icons/HayShenLogo';
import '@/components/Footer/footer.scss';

const links = [
  { label: 'Գլխավոր', href: '#home' },
  { label: 'Ծառայություններ', href: '#services' },
  { label: 'Տեխնիկա', href: '#equipment' },
  { label: 'Մեր մասին', href: '#about' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <HayShenLogo
            className="footer__logo"
            width={176}
            height={42}
            color="#ffffff"
            aria-label="HayShen"
          />
          <p>
            Ստեղծվող հարթակ՝ շինարարական տեխնիկան, մասնագետներին և
            պատվիրատուներին միավորելու համար։
          </p>
          <div className="footer__socials">
            <a href="#website" aria-label="Website">
              <Globe />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <Camera />
            </a>
            <a href="#telegram" aria-label="Telegram">
              <Send />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <Video />
            </a>
          </div>
        </div>

        <nav className="footer__column" aria-label="Footer navigation">
          <h2>HayShen</h2>
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__column">
          <h2>Հարթակը</h2>
          <a href="#services">Ինչպես է աշխատելու</a>
          <a href="#about">Ում համար է</a>
          <a href="#app-promo">Բջջային հավելված</a>
          <a href="#privacy">Գաղտնիություն</a>
        </div>

        <div className="footer__column footer__contact">
          <h2>Կապ մեզ հետ</h2>
          <p>HayShen-ը դեռ մշակման փուլում է։</p>
          <p>Կապի պաշտոնական տվյալները կհրապարակվեն գործարկումից առաջ։</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} HayShen. Բոլոր իրավունքները պաշտպանված
          են։
        </p>
        <div className="footer__bottomMeta">
          <a
            className="footer__creator"
            href="https://www.taan-tech.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Created by TAAN TECHNOLOGIES</span>
            <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
