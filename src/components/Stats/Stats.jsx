import { ClipboardCheck, Contact, Search, SlidersHorizontal } from 'lucide-react';
import '@/components/Stats/stats.scss';

const stats = [
  {
    value: 'Գտնել',
    label: 'անհրաժեշտ տեխնիկան մեկ վայրում',
    Icon: Search,
  },
  {
    value: 'Համեմատել',
    label: 'առաջարկներն ու պայմանները',
    Icon: SlidersHorizontal,
  },
  {
    value: 'Կապվել',
    label: 'տեխնիկայի տիրոջ հետ ուղիղ',
    Icon: Contact,
  },
  {
    value: 'Պատվիրել',
    label: 'պարզ և հասկանալի քայլերով',
    Icon: ClipboardCheck,
  },
];

function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats__container">
        <h2 id="stats-title">Ի՞նչ կտա HayShen-ը</h2>

        <div className="stats__list">
          {stats.map(({ value, label, Icon }) => (
            <article className="stats__item" key={value}>
              <span className="stats__icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
