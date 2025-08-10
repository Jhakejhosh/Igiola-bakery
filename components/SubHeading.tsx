import React from 'react'

interface SubHeadingType {
    text: string,
    classname?: string
}

const SubHeading = ({text, classname}:SubHeadingType) => {
  return (
    <div className={`flex items-center gap-1 mb-5 font-bold ${classname}`}>
        <p className='text-green'>---</p>
        <p className=''>{text}</p>
        <p className='text-green'>---</p>
    </div>
  )
}

export default SubHeading