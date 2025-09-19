import Image from "next/image";
import Link from "next/link";

import About from "./About";
import Marquee from "./Marquee";

import Team from "./Team";
import Service from "./Service";
import Portfolio from "./Portfolio";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";



export default function Home({ onePage = false, dark = false }) {
  return (
    <>
      <section className={`page-section  scrollSpysection pb-0 ${dark ? "bg-dark-1 light-content" : ""} `} id="about">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center mb-md-50">
              <div>
                <div className="wow linesAnimIn" data-splitting="lines">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">Quem</span> Somos
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      A StonePlus é uma fábrica especializada em concreto, cimento e pedras naturais. Produzimos desde
                      bordas de piscina, pisos intertravados e cobogós até projetos exclusivos e sob medida.
                      <br />
                      <br />
                      Combinamos a força do concreto com criatividade e design, entregando soluções que transformam
                      ambientes externos e internos. Nosso compromisso é unir durabilidade, estética e personalização em
                      cada peça.
                    </p>
                  </div>
                </div>
                <div className="local-scroll wow fadeInUpShort wch-unset">
                  {onePage ? (
                    <>
                      {" "}
                      <a href="#team" className="link-hover-anim link-circle-1 align-middle" data-link-animate="y">
                        <span className="link-strong link-strong-unhovered">
                          Saiba Mais <span className="visually-hidden">sobre nós</span>{" "}
                          <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                        </span>
                        <span className="link-strong link-strong-hovered" aria-hidden="true">
                          Saiba Mais <span className="visually-hidden">sobre nós</span>{" "}
                          <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/elegant-about${dark ? "-dark" : ""}`}
                        className="link-hover-anim link-circle-1 align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Saiba Mais <span className="visually-hidden">sobre nós</span>{" "}
                          <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                        </span>
                        <span className="link-strong link-strong-hovered" aria-hidden="true">
                          Saiba Mais <span className="visually-hidden">sobre nós</span>{" "}
                          <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <About />
          </div>
        </div>
      </section>

      <div className="page-section overflow-hidden">
        <Marquee />
      </div>

      <section
        className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 parallax-6 light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6 col-xl-5">
              <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                <div className="call-action-1-image-1 round">
                  <Image
                    src="/assets/images/demo-elegant/call-action-1-image-1.jpg"
                    width={678}
                    height={840}
                    alt="Image Description"
                  />
                </div>
                <div className="call-action-1-image-2">
                  <div
                    className="call-action-1-image-2-inner"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.427"
                  >
                    <Image
                      src="/assets/images/demo-elegant/call-action-1-image-2.jpg"
                      alt="Image Description"
                      width={300}
                      height={409}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-xl-1 d-flex align-items-center">
              <div className="row small-section">
                <div className="col-xl-11">
                  <h2 className="section-title mb-30 mb-sm-20">Procurando por soluções personalizadas?</h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      Explore nosso catálogo exclusivo. Descubra soluções que aliam funcionalidade, beleza e
                      personalização, ideais para ambientes internos e externos.
                    </p>
                  </div>
                  <div className="local-scroll">
                    <a href="#services" className="link-hover-anim link-circle-1 align-middle" data-link-animate="y">
                      <span className="link-strong link-strong-unhovered">
                        Explorar Catálogo <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                      </span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        Explorar Catálogo <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`page-section pb-0  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""} `} id="team">
        <Team />
      </section>

      <div className="page-section overflow-hidden">
        <Marquee />
      </div>

      <section
        className={`page-section pt-0  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""} `}
        id="services"
      >
        <Service />
      </section>

      <hr className="mt-0 mb-0" />

      <section
        className={`page-section pb-0  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""} `}
        id="portfolio"
      >
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Our</span> Portfolio
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                The action centric perspective is a label given to a collection of concepts, which are antithetical to
                the rational model.
              </div>
            </div>
          </div>
        </div>
        <Portfolio />
      </section>

      <section className={`small-section ${dark ? "bg-dark-2 light-content" : "bg-dark-1 light-content"} `}>
        <div className="container">
          <div className="row mb-n10">
            <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 mb-sm-30 text-center text-md-start">
              <h2 className="section-title-small mb-0">Gostou dos nossos projetos?</h2>
            </div>
            <div className="col-md-4 col-lg-3 text-center text-md-end">
              <div className="mt-n20">
                {onePage ? (
                  <>
                    {" "}
                    <a href="#contact" className="link-hover-anim link-circle-1 align-middle" data-link-animate="y">
                      <span className="link-strong link-strong-unhovered">Iniciar um Projeto</span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        Iniciar um Projeto
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/elegant-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">Start a Project</span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        Start a Project
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="small-section bg-dark-1 bg-dark-alpha-70 bg-scroll light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/section-bg-4.jpg)",
        }}
      >
        <NewsLetter />
      </section>

      <section className="page-section  scrollSpysection bg-dark-1 light-content" id="contact">
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Fale</span> Conosco
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                Fale agora com nossa equipe de especialistas e solicite uma proposta personalizada para transformar seu
                projeto em realidade com qualidade e exclusividade.
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}
