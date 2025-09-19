import Header from "@/components/header/Header";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import IndexHero from "@/components/homes/home-5/heros/IndexHero";
import Home from "@/components/homes/home-5";
import Footer from "@/components/footer/Footer";

import { elegantOnepage } from "@/data/menu";

export const metadata = {
  title: "StonePlus — Design em Concreto",
  description: "Empresa especializada em produtos de cimento, bordas de piscina, revestimentos e pedras naturais.",
};

export default function HomeIndex() {
  return (
    <div className="theme-elegant">
      <div className="dark-mode">
        <div className="page bg-dark-1" id="top">
          <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
            <Header links={elegantOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
              style={{
                backgroundImage: "url(/assets/images/demo-elegant/section-bg.jpg)",
              }}
              id="home"
            >
              <IndexHero />
            </ParallaxContainer>

            <Home onePage dark />
          </main>
          <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
