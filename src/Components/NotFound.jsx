import React from 'react'
import {BlockInformation} from './Auxiliares/BlockInformation'

export const NotFound = () =>{
    return(
        <div className="bodyPage">
            <BlockInformation
                id={"NotFound"}
                titulo={"Página no encontrada"}
                texto ={"La página a la que deseas acceder no se encuentra"}
            />
        </div>
    )
}