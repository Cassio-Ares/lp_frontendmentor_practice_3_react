import React from 'react'

const Btn = ({style_btn, text, click}) => {
  return (
    <>
    <button onClick={click} className={style_btn}>{text}</button>
    </>
  )
}

export default Btn