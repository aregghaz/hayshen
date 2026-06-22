import '@/App.scss';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import Platform from '@/components/Platform/Platform';
import Audience from '@/components/Audience/Audience';
import AppPromo from '@/components/AppPromo/AppPromo';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Platform />
        <Audience />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
