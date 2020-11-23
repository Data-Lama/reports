import React, { useEffect, useRef, useState } from 'react'
import { CardGraphic } from '../Auxiliares/CardGraphic'

const { tableau } = window;

const urls = ["https://public.tableau.com/views/GraficasRosario/figura2?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
    "https://public.tableau.com/views/GraficasRosario/figura3?:language=es&:display_count=y&:origin=viz_share_link",
    "https://public.tableau.com/views/GraficasRosario/Figura4?:language=es&:display_count=y&:origin=viz_share_link",
    "https://public.tableau.com/views/GraficasRosario/Figura5?:language=es&:display_count=y&:origin=viz_share_link",
    "https://public.tableau.com/views/GraficasRosario/Dashboard3?:language=es&:retry=yes&:display_count=y&:origin=viz_share_link"]

export const Movilidad = ({content}) => {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const texts = [content.movilidadCasosF1 , content.movilidadCasosF2, content.movilidadCasosF3 , content.movilidadCasosF4 ,content.movilidadCasosF5]
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
            <p className="titleReporteActual">MOVILIDAD Y CASOS</p>
            <p className="textGraphs">{content.movilidadCasos}</p>
            <div className="wrapperCardGraphic">
                <div className="grid">
                    <CardGraphic
                        text={"Cambio porcentual expresado en decimales sobre el movimiento interno en ciudades principales"}
                        onClickFun={() => setIndex(0)}
                        index={index}
                        number={0}
                    />
                    <CardGraphic
                        text={"Cambio de movilidad incidente (hacia la unidad administrativa) en Colombia"}
                        onClickFun={() => setIndex(1)}
                        index={index}
                        number={1}
                    />
                    <CardGraphic
                        text={"Mapa con evolución de movilidad interna y externa y contagios"}
                        onClickFun={() => setIndex(2)}
                        index={index}
                        number={2}
                    />
                </div>
                <div className="grid">
                    <CardGraphic
                        text={"Mapa con evolución de movilidad interna y externa y contagios para los últimos 15 días."}
                        onClickFun={() => setIndex(3)}
                        index={index}
                        number={3}
                    />
                    <CardGraphic
                        text={"Incidencia acumulada por municipio (Casos por 100 personas) "}
                        onClickFun={() => setIndex(4)}
                        index={index}
                        number={4}
                    />
                </div>
            </div>
            <div className="grafica" ref={ref}></div>
            <p className="textGraphs">{texts[index]}</p>
        </div>

    )
}