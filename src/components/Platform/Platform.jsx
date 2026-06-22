import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  HardHat,
  Search,
  Truck,
} from 'lucide-react';
import '@/components/Platform/platform.scss';

const features = [
  {
    number: '01',
    title: 'Տեխնիկայի որոնում',
    text: 'Գտնել անհրաժեշտ շինարարական տեխնիկան ըստ տեսակի և աշխատանքի։',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Մասնագետների ընտրություն',
    text: 'Բացահայտել փորձառու մասնագետների և անմիջապես կապ հաստատել։',
    Icon: HardHat,
  },
  {
    number: '03',
    title: 'Հստակ պայմաններ',
    text: 'Նախապես տեսնել առաջարկի կարևոր տվյալներն ու համեմատել տարբերակները։',
    Icon: BadgeCheck,
  },
  {
    number: '04',
    title: 'Առցանց պատվեր',
    text: 'Ուղարկել հարցում և համաձայնեցնել աշխատանքի օրը պարզ քայլերով։',
    Icon: CalendarCheck,
  },
  {
    number: '05',
    title: 'Տեխնիկայի տեղադրում',
    text: 'Սեփականատերերը կկարողանան ներկայացնել տեխնիկան մեկ պրոֆիլում։',
    Icon: Truck,
  },
];

function Platform() {
  return (
    <section className="platform" id="services">
      <span id="equipment" className="platform__anchor" aria-hidden="true" />
      <div className="platform__container">
        <div className="platform__intro">
          <p className="platform__eyebrow">HayShen հարթակ</p>
          <h2>
            Ամեն ինչ՝ շինարարական
            <span> աշխատանքի համար</span>
          </h2>
          <p>
            Մենք ստեղծում ենք մեկ միջավայր, որտեղ տեխնիկա գտնելը, մասնագետի
            հետ կապվելը և պատվերը կազմակերպելը կլինի ավելի հասկանալի։
          </p>
          <a href="#about">
            Իմանալ ավելին
            <ArrowUpRight size={18} />
          </a>
        </div>

        {features.map(({ number, title, text, Icon }) => (
          <article className="platform__card" key={number}>
            <span className="platform__number">{number}</span>
            <span className="platform__icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}

        <article className="platform__highlight">
          <div>
            <p>Մեր նպատակը</p>
            <h3>Շինարարական ծառայությունները դարձնել հասանելի ու պարզ</h3>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}

export default Platform;
