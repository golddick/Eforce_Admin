import React from 'react'
import "./widgetcard.css"
import WICON from '../../assets/widgetIcon.png'

function WidgetCard({title, value, percent}) {
  return (
    <div className='WidgetCard_'>
        <div className="topText">
            <img src={WICON} alt="" className='wicon' />
            <span className='widgetHeader'>{title}</span>
        </div>
        <div className="bottomText">
            <span className='widgetPrice'>N{value}</span>
            <div className="wPercent">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 24 11" fill="none">
            <path d="M1 8.87402L7.68753 3.48086L12.2178 8.87402L22.8963 1M22.8963 1V5.96171M22.8963 1H18.366" stroke="#2FEB86" stroke-width="1.78207"/>
            </svg>
            <span className='percentText'> {percent} {""}%</span>
            </div>
        </div>
    </div>
  )
}

export default WidgetCard