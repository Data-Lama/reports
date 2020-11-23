import React, { useState } from 'react'
import {Switch , Route, Link, useLocation, useRouteMatch} from 'react-router-dom'
import { Resumen } from './ReporteActual/Resumen';
import { Movilidad } from './ReporteActual/MovilidadYCasos';
import { Proyecciones } from './ReporteActual/Proyecciones';
import { Alertas } from './ReporteActual/Alertas';
import '../Styles/ReporteActual.css'
import { useEffect } from 'react';
import { NotFound } from './NotFound';

export const ReporteActual = () => {
    const location = useLocation()
    const path = location.pathname;
    const match = useRouteMatch();
    const [content, setContent] = useState({
        resumen: "RS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasos: "MC Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasosF1: "MC F1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasosF2: "MC F2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasosF3: "MC F3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasosF4: "MC F4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        movilidadCasosF5: "MC F5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        proyecciones: "PY Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        proyeccionesF1: "PY F1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        proyeccionesF2: "PY F2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!",
        alertas: "AL Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sit quod repudiandae itaque impedit hic fugiat dolorem aliquam ipsa est possimus rem enim quam officia suscipit rerum animi saepe nisi!"
    });

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await fetch("https://raw.githubusercontent.com/jcsanguino10/VisualAnalytics/master/contentPage.json")
            .then(response => response.json())
            .then(data => setContent(data))
            .catch((err)=>{
                console.log(err)
            })
    }
    return (
        <div>
            <div className="row subnav">
                <span>REPORTE ACTUAL</span>
                <Link className={path.includes("Resumen") ? "option Active" : "option"} to={`${match.url}/Resumen`} >Resumen</Link>
                <Link className={path.includes("Movilidad") ? "option Active" : "option"} to={`${match.url}/MovilidadCasos`} >Movilidad y casos</Link>
                <Link className={path.includes("Proyecciones") ? "option Active" : "option"} to={`${match.url}/Proyecciones`} >Proyecciones</Link>
                <Link className={path.includes("Alertas") ? "option Active" : "option"} to={`${match.url}/Alertas`} >Alertas</Link>
            </div>
            <div className="bodyPage">
                <Switch>
                    <Route path={`${match.url}/Resumen`}> <Resumen content={content}/> </Route>
                    <Route path={`${match.url}/MovilidadCasos`}> <Movilidad content={content}/> </Route>
                    <Route path={`${match.url}/Proyecciones`}> <Proyecciones content={content}/> </Route>
                    <Route path={`${match.url}/Alertas`}> <Alertas content={content}/> </Route>
                </Switch>
            </div>
        </div>
    )
}



