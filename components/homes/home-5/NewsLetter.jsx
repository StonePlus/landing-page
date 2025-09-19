"use client";

import React, { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    if (!email) {
      setStatus("Por favor, insira uma mensagem de erro válido.");
      return;
    }

    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email,

          listIds: [5],
          updateEnabled: true,
        }),
      });

      if (res.ok) {
        setStatus("Inscrição realizada com sucesso!");
        setEmail("");
      } else {
        const error = await res.json();
        setStatus(`Erro: ${error.message}`);
      }
    } catch (err) {
      setStatus("Erro ao enviar. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 wow fadeInUp wch-unset">
          <h2 className="section-title-tiny text-gray mb-20">Fique por dentro das nossas novidades</h2>
          <form onSubmit={handleSubmit} id="brevo-newsletter" className="form newsletter-elegant" autoComplete="off">
            <div className="row">
              <div className="col-md-8 col-lg-9 mb-sm-30">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira o seu e-mail"
                  className="newsletter-field input-lg form-control mb-20"
                  type="email"
                  name="EMAIL"
                  target="_blank"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <div className="form-tip">
                  <i className="icon-info size-16" /> Ao se inscrever, você receberá conteúdos exclusivos da StonePlus e
                  concorda com os <a href="#">Termos &amp; Condições</a> e a <a href="#">Política de Privacidade</a>.
                </div>
              </div>
              <div className="col-md-4 col-lg-3 text-start text-md-end">
                <button type="submit" className="link-hover-anim link-circle-1 align-middle">
                  <span className="link-strong link-strong-unhovered">
                    Inscrever-se
                    <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                  </span>
                  <span className="link-strong link-strong-hovered" aria-hidden="true">
                    Inscrever-se
                    <i className="mi-arrow-right size-18 align-middle" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              className="mt-2 text-sm text-gray-700"
            >
              {status}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
