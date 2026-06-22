import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  HardHat,
  UserRoundSearch,
} from 'lucide-react';
import '@/components/Audience/audience.scss';

const audiences = [
  {
    title: 'Պատվիրատուների համար',
    text: 'Արագ գտնել աշխատանքի համար համապատասխան տեխնիկա կամ մասնագետ։',
    Icon: UserRoundSearch,
  },
  {
    title: 'Սեփականատերերի համար',
    text: 'Ներկայացնել տեխնիկան և ստանալ նոր հարցումներ մեկ հարթակից։',
    Icon: HardHat,
  },
];

function Audience() {
  return (
    <section className="audience" id="about">
      <div className="audience__container">
        <div className="audience__visual" aria-hidden="true">
          <div className="audience__panel audience__panel--main">
            <span>HayShen</span>
            <strong>Մեկ կապող հարթակ</strong>
            <p>Տեխնիկա · Մասնագետ · Պատվեր</p>
          </div>

          <div className="audience__panel audience__panel--top">
            <BadgeCheck />
            <span>Հստակ պրոֆիլներ</span>
          </div>

          <div className="audience__panel audience__panel--bottom">
            <Handshake />
            <div>
              <strong>Ուղիղ կապ</strong>
              <small>պատվիրատուի և կատարողի միջև</small>
            </div>
          </div>

          <span className="audience__shape audience__shape--one" />
          <span className="audience__shape audience__shape--two" />
        </div>

        <div className="audience__content">
          <p className="audience__eyebrow">Ում համար է HayShen-ը</p>
          <h2>
            Երկու կողմ,
            <span> մեկ պարզ լուծում</span>
          </h2>
          <p className="audience__lead">
            HayShen-ը նախատեսված է նրանց համար, ովքեր փնտրում են տեխնիկա և
            նրանց համար, ովքեր ցանկանում են իրենց ծառայությունը դարձնել ավելի
            տեսանելի։
          </p>

          <div className="audience__cards">
            {audiences.map(({ title, text, Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <ul>
            <li>Ավելի քիչ ժամանակ՝ որոնման վրա</li>
            <li>Ավելի հստակ ընտրություն և պայմաններ</li>
            <li>Հարմար կապ առանց բարդ գործընթացների</li>
          </ul>

          <a href="#home">
            Բացահայտել HayShen-ը
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Audience;
