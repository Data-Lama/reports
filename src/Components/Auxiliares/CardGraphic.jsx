import React from 'react'
import '../../Styles/CardGraphic.css'
import GoIcono from '../../Images/GO.svg'

export const CardGraphic = ({ text, onClickFun, number, index }) => {
    return (
        <div className={number === index ? "CardGraphic on" : "CardGraphic off"} onClick={() => onClickFun()}>
            <p>{text}</p>
            <div className="icon">
                <img src={GoIcono} alt="Kiwi standing on oval"/>
            </div>
        </div>
    )
}