import React, { useEffect, useState } from 'react';
import '../Styles/HistoricoReportes.css'
import ImgBH from '../Images/banner-docs.png'


export const HistoricoReportes = () => {

    const [historico, setHisorico] = useState([]);
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await fetch("https://raw.githubusercontent.com/jcsanguino10/VisualAnalytics/master/data.json")
            .then(response => response.json())
            .then(data => setHisorico(data))
    }

    return (
        <div>
            <div className="bannerHistorico">
                <div className="contentBH">
                    <div className="titleBH">
                        ACCEDE A NUESTROS REPORTES HISTÓRICOS
                    </div>
                    <div className="subtitleBH">
                        Conoce los reportes que generamos en meses anteriores. En caso de que necesites ver el comportamiento de la movilidad población y contagios en Colombia durante el Covid-19 y  comparar en mayores lapsos de tiempo
                    </div>
                </div>
                <div className="imgBH">
                    <img src={ImgBH} alt="Imagen banner"/>
                </div>
            </div>
            <div className="bodyPage">
                <div className="containerCards">
                    {historico.map((report, index) => (
                        <CardsHistorico
                            key={report.Titulo + index}
                            title={report.Titulo}
                            link={report.link}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

function CardsHistorico({ title, link }) {
    return (
        <div className="cardHistorico">
            <div className="titleCardHistorico">{title}</div>
            <div className="linkHistoricos">
                <a href={link} rel="noopener noreferrer" target="_blank">Ir al pdf</a>
            </div>

        </div>
    )
}