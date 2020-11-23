import React, { useRef, useEffect } from 'react'


const { tableau } = window;

export const Resumen = ({ content }) => {

    const ref = useRef(null);
    const url = "https://public.tableau.com/views/GraficasRosario/Dashboard2?:language=es&:display_count=y&:origin=viz_share_link"
    useEffect(() => {
        new tableau.Viz(ref.current, url)
        return (() => {
            if (window.tableau.VizManager.getVizs()[0]) {
                window.tableau.VizManager.getVizs()[0].dispose()
            }
        })
    }, [])

    return (
        <div>
            <p className="titleReporteActual">RESUMEN</p>
            <p className="textGraphs">{content.resumen}</p>
            <div className="grafica" ref={ref}></div>
        </div>

    )
}

