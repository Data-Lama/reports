import React, { useState } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { NotFound } from './Components/NotFound';
import { Home } from './Components/Home';
import { HistoricoReportes } from './Components/HistoricoReportes';
import { ReporteActual } from './Components/ReporteActual';
import './Styles/Landing.css'
import ImgFooter from './Images/footer.svg';

function Navbar() {
  const [statusMenu, setStatusMenu] = useState(false);
  const location = useLocation()
  const path = location.pathname;
  return (
    <div className="navbar row">
      <div className="logo-rosario">DataLama.</div>
      <div className="optionsNavbar">
        <div className="row">
          <Link className={path === "/" ? "linkNav Active" : "linkNav"} to="/" onClick={() => setStatusMenu(false)}>Inicio</Link>
          <div className={statusMenu ? "button-navbar linkNav on" : "button-navbar linkNav off"}>
            <span className={statusMenu ? "linkNav on" : "linkNav off"} onClick={() => setStatusMenu(!statusMenu)}>Reportes</span>
            <div className={statusMenu ? "menu on" : "menu off"}>
              <Link className={path.includes("ReporteActual") ? "linkNav Active" : "linkNav"} to="/ReporteActual/Resumen" onClick={() => setStatusMenu(!statusMenu)}>Actual</Link>
              <Link className={path.includes("HistoricoReportes") ? "linkNav Active" : "linkNav"} to="/HistoricoReportes" onClick={() => setStatusMenu(!statusMenu)} >Históricos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Landing() {
  return (
    <div className="Landing">
      <div className="cintilla">
        <div>Para una mejor experiencia recomendamos ver nuestra página en un pantalla superior o igual a las 12 pulgadas</div>
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/HistoricoReportes"> <HistoricoReportes /></Route>
        <Route path="/ReporteActual"> <ReporteActual/> </Route>
        <Route path="/*"> <NotFound /> </Route>
      </Switch>
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
