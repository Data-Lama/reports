import React, { useState } from 'react'
import { useRoutes, A, usePath } from 'hookrouter';
import { Resumen } from './ReporteActual/Resumen';
import { Movilidad } from './ReporteActual/MovilidadYCasos';
import { Proyecciones } from './ReporteActual/Proyecciones';
import { Alertas } from './ReporteActual/Alertas';
import { NotFound } from './NotFound';
import '../Styles/ReporteActual.css'
import { useEffect } from 'react';

const routesReporte = {
    '/Resumen': ()=>(content) => <Resumen content={content}/>,
    '/MovilidadCasos': ()=>(content) => <Movilidad content={content}/>,
    '/Proyecciones': ()=>(content) => <Proyecciones content={content}/>,
    '/Alertas': ()=>(content) => <Alertas content={content}/>
}

export const ReporteActual = () => {
    const match1 = useRoutes(routesReporte);
    const path = usePath();
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
                <A className={path.includes("Resumen") ? "option Active" : "option"} href="Resumen" >Resumen</A>
                <A className={path.includes("Movilidad") ? "option Active" : "option"} href="MovilidadCasos" >Movilidad y casos</A>
                <A className={path.includes("Proyecciones") ? "option Active" : "option"} href="Proyecciones" >Proyecciones</A>
                <A className={path.includes("Alertas") ? "option Active" : "option"} href="Alertas" >Alertas</A>
            </div>
            <div className="bodyPage">
                {match1(content) || <NotFound/>}
            </div>
        </div>
    )
}



