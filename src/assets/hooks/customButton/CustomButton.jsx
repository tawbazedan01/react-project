import React from 'react'
import style from './customButton.module.css'


export default function CustomButton({ type, text, onClick}) {
  return (
    <button className={`${style.customBtn} ${style[type]} `} onClick={onClick}>
      {text}
    </button>
  )
}
