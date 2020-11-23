import React, {useEffect, useRef} from 'react'

const {tableau} = window;

export const Alertas = ({content}) =>{
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/GraficasRosario/figuro9?:language=es&:display_count=y&:origin=viz_share_link"
    useEffect(()=>{
        new tableau.Viz(ref.current, url)
        return( ()=>{
            if (window.tableau.VizManager.getVizs()[0]) {
                window.tableau.VizManager.getVizs()[0].dispose()
            }
        })
    },[])

    return (
        <div>
            <p className="titleReporteActual">ALERTAS</p>
            <p className="textGraphs">{content.alertas}</p>
            <div className="grafica" ref={ref}></div>
        </div>

    )
}