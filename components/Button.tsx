import React from 'react'

interface ButtonProp {
    label: string,
    classname: string,
    onClick?: () => void
}

const Button:React.FC<ButtonProp> = ({label, classname, onClick}) => {
  return (
    <button onClick={onClick} className={`${classname} cursor-pointer tracking-widest 
         font-medium px-6 py-2`}>{label}</button>
  )
}

export default Button