import React from 'react'
import '../../Styles/BlockInformation.css'

export const BlockInformation = ({id, titulo, texto})=>{
    return(
        <div className={"blockInformation"} id={id}>
            <div className="titleBlock">
                {titulo}
            </div>
            <div className="bodyBlock">
                {texto}
            </div>
        </div>
    )
}