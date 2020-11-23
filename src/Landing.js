import React, { useState } from 'react';
import { useRoutes, A, usePath } from 'hookrouter';
import { NotFound } from './Components/NotFound';
import { Home } from './Components/Home';
import { HistoricoReportes } from './Components/HistoricoReportes';
import { ReporteActual } from './Components/ReporteActual';
import './Styles/Landing.css'
import ImgFooter from './Images/footer.svg';

const routes = {
  '/': () => <Home />,
  '/HistoricoReportes': () => <HistoricoReportes />,
  '/ReporteActual*': () => <ReporteActual />
}

function Navbar() {
  const [statusMenu, setStatusMenu] = useState(false);
  const path = usePath();
  return (
    <div className="navbar row">
      <div className="logo-rosario">DataLama.</div>
      <div className="optionsNavbar">
        <div className="row">
          <A className={path === "/" ? "linkNav Active" : "linkNav"} href="/" onClick={() => setStatusMenu(false)}>Inicio</A>
          <div className={statusMenu ? "button-navbar linkNav on" : "button-navbar linkNav off"}>
            <span className={statusMenu ? "linkNav on" : "linkNav off"} onClick={() => setStatusMenu(!statusMenu)}>Reportes</span>
            <div className={statusMenu ? "menu on" : "menu off"}>
              <A className={path.includes("ReporteActual") ? "linkNav Active" : "linkNav"} href="/ReporteActual/Resumen" onClick={() => setStatusMenu(!statusMenu)}>Actual</A>
              <A className={path.includes("HistoricoReportes") ? "linkNav Active" : "linkNav"} href="/HistoricoReportes" onClick={() => setStatusMenu(!statusMenu)} >Históricos</A>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Landing() {
  const match = useRoutes(routes);
  return (
    <div className="Landing">
      <div className="cintilla">
        <div>Para una mejor experiencia recomendamos ver nuestra página en un pantalla superior o igual a las 12 pulgadas</div>
      </div>
      <Navbar />
      {match || <NotFound />}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="RosarioContent">
        <img src={ImgFooter} alt="logo universidad rosario"></img>
        <div>Universidad del Rosario</div>
        <div>© Copyright 2020</div>
      </div>
      <div>Desarrollado y diseñado por <a target="_blank" rel="noopener noreferrer" href="https://polyglot.site/">Polyglot</a></div>
    </div>
  )
}



export default Landing;
