import Footer5 from "@/components/footer/Footer";

import Header5 from "@/components/header/Header";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/IndexHero";
import Hero3 from "@/components/homes/home-5/heros/Hero3";
import { elegantMultipageDark } from "@/data/menu";

export const metadata = {
  title:
    "Home 5 Split MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home5SplitMultiPageDark() {
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode stick-fixed wow-menubar">
              <Header5 links={elegantMultipageDark} />
            </nav>
            <main id="main">
              <section className="home-section scrollSpysection" id="home">
                <Hero3 dark />
              </section>

              <Home5 dark />
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
