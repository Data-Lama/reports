import React, { useEffect, useRef, useState } from 'react'
import {CardGraphic} from '../Auxiliares/CardGraphic'

const { tableau } = window;
const urls = ["https://public.tableau.com/views/GraficasRosario/figura7?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
    "https://public.tableau.com/views/GraficasRosario/Figura8?:language=es&:display_count=y&:origin=viz_share_link"]

export const Proyecciones = ({content}) => {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const texts = [content.proyeccionesF1, content.proyeccionesF2]
    useEffect(() => {
        if (window.tableau.VizManager.getVizs()[0]) {
            window.tableau.VizManager.getVizs()[0].dispose()
        }
        new tableau.Viz(ref.current, urls[index])
        return( ()=>{
            if (window.tableau.VizManager.getVizs()[0]) {
                window.tableau.VizManager.getVizs()[0].dispose()
            }
        })
    }, [index])

    return (
        <div>
            <p className="titleReporteActual">PROYECCIONES</p>
            <p className="textGraphs">{content.proyecciones}</p>
            <div className="row rowCards">
                <CardGraphic
                    text={"Cambio porcentual expresado en decimales sobre el movimiento interno en ciudades principales"}
                    onClickFun={() => setIndex(0)}
                    index={index}
                    number={0}
                />
                <CardGraphic
                    text={"Simulación utilizando los modelos entrenados para ver el efecto del cambio en la movilidad en los casos confirmados"}
                    onClickFun={() => setIndex(1)}
                    index={index}
                    number={1}
                />
            </div>
            <div className="grafica" ref={ref}></div>
            <p className="textGraphs">{texts[index]}</p>
        </div>

    )
}