import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Compass,
  Landmark,
  Mail,
  Map,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";

const steps = [
  {
    number: "01",
    eyebrow: "Leitura do lugar",
    title: "A paisagem gera perguntas",
    description:
      "Mapas e observação direta revelam contrastes, ritmos e sinais que orientam o que precisa ser investigado em campo.",
    icon: Map,
    accent: "ochre",
  },
  {
    number: "02",
    eyebrow: "Escuta situada",
    title: "Rightholders identificam tendências",
    description:
      "Conversas com quem vive e trabalha no território trazem à tona o que está mudando — e por quê.",
    icon: Users,
    accent: "sage",
  },
  {
    number: "03",
    eyebrow: "Visão de conjunto",
    title: "Informantes-chave apontam possibilidades",
    description:
      "Discutir as tendências com quem tem uma visão ampla transforma observação em possibilidade concreta de mudança.",
    icon: Compass,
    accent: "clay",
  },
  {
    number: "04",
    eyebrow: "Ação negociada",
    title: "Instituições locais formulam o projeto",
    description:
      "A possibilidade de mudança chega a representantes institucionais, que a traduzem em projeto pronto para negociação e financiamento.",
    icon: Landmark,
    accent: "ink",
  },
];

const countries = [
  "Angola",
  "Cabo Verde",
  "Gâmbia",
  "Guatemala",
  "Moçambique",
  "Portugal",
  "São Tomé e Príncipe",
  "Brasil",
];

function TerritoryMap() {
  return (
    <div className="territory-map" aria-hidden="true">
      <div className="map-grid" />
      <svg className="map-lines" viewBox="0 0 620 620" fill="none">
        <path d="M-10 380C92 293 105 410 180 321S275 194 339 248s76 96 142 16 98-126 153-64" />
        <path d="M-32 470c100-42 130-1 194-55s107-159 183-113 82 94 138 67 71-85 155-50" />
        <path d="M70 50c-5 128 60 172 106 214s37 120 109 158 139 29 197 150" />
        <path d="M364-18c-43 87-21 150 23 209s-5 114-61 164-57 115-18 214" />
        <circle cx="184" cy="322" r="7" />
        <circle cx="339" cy="248" r="7" />
        <circle cx="481" cy="264" r="7" />
        <circle cx="320" cy="535" r="7" />
      </svg>
      <div className="map-label label-a">campo</div>
      <div className="map-label label-b">escuta</div>
      <div className="map-label label-c">decisão</div>
      <div className="map-coordinates">22°54′ S<br />43°12′ W</div>
      <span className="map-north">N</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" onClick={closeMenu}>
          <span className="brand-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>José Ferreira</span>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#metodo" onClick={closeMenu}>O método</a>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a className="nav-cta" href="#conversar" onClick={closeMenu}>
            Conversar <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="overline hero-overline"><span /> Diagnóstico territorial</p>
          <h1>Diagnóstico<br /><em>Territorial</em><br />em Quatro Semanas</h1>
          <p className="hero-lede">
            Da leitura da paisagem a um projeto validado localmente, com quem vive e decide sobre o território.
          </p>
          <a className="text-link" href="#metodo">
            Conheça o percurso <ArrowDown size={16} />
          </a>
        </div>
        <div className="hero-art">
          <TerritoryMap />
          <div className="hero-caption"><span>01</span> um mês de trabalho situado</div>
        </div>
        <div className="hero-stamp"><span>4</span> etapas<br />conectadas</div>
      </section>

      <section className="intro-section section-frame">
        <div className="section-index">/ 01</div>
        <div className="intro-content">
          <p className="overline">Um método em movimento</p>
          <h2>O território não é um<br /><em>cenário.</em> É a pergunta.</h2>
          <p className="intro-text">
            Um mês de trabalho estruturado em quatro etapas conectadas, cada uma abrindo a porta para a seguinte: da observação do território a um projeto pronto para negociação com instituições locais.
          </p>
          <div className="purpose-block">
            <p className="purpose-label">Para quê serve</p>
            <p className="purpose-text">
              Aumentar a concertação entre atores locais, ajudar a resolver conflitos e aproximar a assistência técnica a pequenos empresários — particularmente agricultores familiares — da organização de cadeias de valor e da estruturação de oportunidades de mercado.
            </p>
          </div>
        </div>
        <div className="intro-note">
          <span className="note-line" />
          <p>O método vem sendo aplicado e refinado ao longo de quase vinte anos de diagnósticos territoriais em mais de dez países.</p>
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="section-frame method-heading">
          <div className="section-index">/ 02</div>
          <div>
            <p className="overline">Quatro etapas conectadas</p>
            <h2>Da observação<br /><em>à possibilidade.</em></h2>
          </div>
          <p className="method-aside">O que se vê no território é apenas o início. O método cria as condições para que atores locais se escutem, resolvam conflitos e conectem capacidades produtivas a oportunidades de mercado.</p>
        </div>

        <div className="steps-grid section-frame">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article className={`step-card ${step.accent}`} key={step.number}>
                <div className="step-topline">
                  <span className="step-number">{step.number}</span>
                  <Icon size={24} strokeWidth={1.2} />
                </div>
                <div className="step-body">
                  <p className="step-eyebrow">{step.eyebrow}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-arrow"><ArrowUpRight size={19} /></span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section section-frame" id="experiencia">
        <div className="section-index">/ 03</div>
        <div className="experience-copy">
          <p className="overline">Percurso internacional</p>
          <h2>Quase 20 anos<br />de <em>territórios.</em></h2>
          <p>
            Diagnósticos em mais de dez países, sempre com a mesma convicção: projetos mais consistentes nascem quando o conhecimento local participa da decisão.
          </p>
          <div className="partner-line">
            <span>Trabalhos para</span>
            <strong>FAO&nbsp; · &nbsp;ActionAid Internacional&nbsp; · &nbsp;Instituto Camões</strong>
          </div>
        </div>
        <div className="country-list" aria-label="Países onde o método foi aplicado">
          {countries.map((country, index) => (
            <div className="country-item" key={country}>
              <span>{String(index + 1).padStart(2, "0")}</span>{country}
            </div>
          ))}
          <p className="country-more">e outros territórios onde<br />o futuro está sendo negociado.</p>
        </div>
      </section>

      <section className="contact-section" id="conversar">
        <div className="contact-inner section-frame">
          <div className="section-index light-index">/ 04</div>
          <div className="contact-heading">
            <p className="overline light-overline">Primeiro passo</p>
            <h2>Conversar sobre<br /><em>o território.</em></h2>
            <p>Conte um pouco sobre o contexto que quer compreender. Uma boa conversa pode ser o começo de um projeto.</p>
          </div>
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon"><Check size={22} /></span>
                <h3>Mensagem recebida.</h3>
                <p>Obrigado pelo contato. José responderá em breve para continuarmos essa conversa.</p>
                <button type="button" className="reset-button" onClick={() => setSubmitted(false)}>Enviar outra mensagem</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Seu nome</span>
                  <input type="text" name="name" placeholder="Como podemos chamar você?" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="voce@organizacao.org" required />
                </label>
                <label>
                  <span>Sobre o que gostaria de conversar?</span>
                  <textarea name="message" rows={3} placeholder="Contexto, território, desafio..." required />
                </label>
                <button type="submit" className="submit-button">Enviar mensagem <ArrowUpRight size={17} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer section-frame">
        <div className="footer-name">José Ferreira<br /><span>consultor internacional em diagnósticos territoriais</span></div>
        <div className="footer-contact">
          <a href="mailto:jferreira.dts@gmail.com"><Mail size={16} /> jferreira.dts@gmail.com</a>
          <a href="tel:+5521969381399"><Phone size={16} /> +55 21 969 381 399</a>
        </div>
        <div className="footer-place">Rio de Janeiro<br /><span>Brasil</span></div>
        <p className="footer-copy">© {new Date().getFullYear()} José Ferreira</p>
      </footer>

      <a className="floating-cta" href="#conversar">
        <span>Conversar sobre o território</span><ArrowUpRight size={17} />
      </a>
    </main>
  );
}
