"use client";

import { socialMediaLinks } from "@/data/footer";

export default function Footer5() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap" onClick={scrollToTop}>
        <a href="#top" className="link-to-top-2">
          Voltar ao topo
        </a>
      </div>
      {/* End Scroll Up */}
      {/* Social Links */}
      <div className="footer-social-links mb-60">
        {socialMediaLinks.map((elm, i) => (
          <a href={elm.href} key={i} title={elm.title} rel="noopener nofollow" target="_blank">
            <span className="visually-hidden">{elm.name}</span>
            <i className={elm.iconClass} />
          </a>
        ))}
      </div>
      {/* End Social Links */}
      {/* Footer Text */}
      <div className="footer-text">
        {/* Copyright */}
        <div>© {new Date().getFullYear()} - StonePlus</div>
        {/* End Copyright */}
        <div className="footer-made">Todos os direitos reservados.</div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
