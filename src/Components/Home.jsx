import React from 'react'
import '../Styles/Home.css'
import { BlockInformation } from './Auxiliares/BlockInformation'
import { A } from 'hookrouter';
import P1 from '../Images/p1.png'
import P2 from '../Images/p2.png'
import P3 from '../Images/p3.png'
import P4 from '../Images/p4.png'
import P5 from '../Images/p5.png'
import P6 from '../Images/p6.png'
import P7 from '../Images/p7.png'
import P8 from '../Images/p8.png'
import P9 from '../Images/p9.png'
import P10 from '../Images/p10.png'

const names = ["Alejandro Feged", "Carolina Salazar", "Andrés Sampayo", "Jaime Cascante", "Felipe Gozález", "Andrea Parra", "Mauricio Santos", "Tomás Rodriguez", "Andrés Ángel", "Vladimir Corredor"];
const imgs = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]
const carreras = ["Ciencia Política", "Ciencia Política", "Ciencia Política", "Ciencia Política", "Ciencia Política", "Ciencia Política", "Ing. Biomédica", "Economía", "Matemáticas", "Nacional"]
export const Home = () => {
    return (
        <div>
            <div className="bannerImgHome">
                <div className="content">
                    <div className="title">
                        <p>MOVILIDAD  POBLACIONAL Y CONTAGIOS EN COLOMBIA DURANTE COVID-19</p>
                    </div>
                    <div className="descripcion">
                        <p>La movilidad humana constituye el principal riesgo de importación y diseminación de COVID-19. Las medidas adoptadas para reducir la movilidad tienen el objetivo de disminuir la probabilidad de contactos y por consiguiente los contagios.</p>
                    </div>
                </div>
            </div>
            <div className="bodyPage">
                <BlockInformation
                    id={"sobreProyecto"}
                    titulo={"SOBRE EL PROYECTO"}
                    texto={"Nuestro propósito es contribuir a un mejor diseño y seguimiento de políticas públicas, a través de mejor información y análisis integrales y pertinentes con base en repositorios de información amplios y metodologías innovadoras. Esta iniciativa nace en el marco de la crisis generada por COVID-19 desde la academia con la intención de proveer información a tomadores de decisiones de política pública sobre medidas de mitigación con base en información de redes sociales, epidemiológica y socio-económica utilizando inteligencia artificial."}
                />
                <BlockInformation
                    id={"equipo"}
                    titulo={"EQUIPO"}
                    texto={"Somos un equipo interdisciplinario dedicado a la investigación con analítica de datos en áreas relevantes de política pública, basado en la Universidad del Rosario, con apoyo de la Universidad de los Andes y la Universidad Nacional."}
                />
                <div className="wraperCardsMembers">
                    {names.map((nombre, index) => (
                        <CardMember
                            key={nombre + index}
                            nombre={nombre}
                            carrera={carreras[index]}
                            img={imgs[index]}
                            index={index}
                        />
                    ))}
                </div>

                <div id="titleReportesYDatos">CONOCE LOS DATOS Y REPORTES</div>
                <div className="row wrapperCard">
                    <CardReporte
                        title={"Reporte actual"}
                        body={"Visualiza los reportes de movilidad con los datos más actualizados"}
                        link={"/ReporteActual/Resumen"}
                    />
                    <CardReporte
                        title={"Reportes históricos"}
                        body={"Accede a reportes históricos en formato PDF"}
                        link={"/HistoricoReportes"}
                    />
                </div>

            </div>
        </div>
    )
}

function CardReporte({ title, body, link }) {
    return (
        <div className="cardReport">
            <div className="titleCard">
                {title}
            </div>
            <div className="bodyCard">
                {body}
            </div>
            <A className="buttonCard" href={link} onClick={() => { window.scrollTo(0, 0) }}>
                Ver más
            </A>
        </div>
    )
}

function CardMember({ nombre, img, carrera, index }) {
    return (
        <div className="cardMember" id={"cardMember" + index}>
            <img src={img} alt={nombre} className="imgMember" />
            <div className="nameMember">
                {nombre}
            </div>
            <div className="carreraMember">
                {carrera}
            </div>
        </div>
    )
}