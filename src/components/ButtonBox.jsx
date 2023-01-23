import React from 'react'

export const ButtonBox = ({colorRandom, changeElement}) => {
  return (
    <button style={{backgroundColor: colorRandom}} onClick={changeElement} >&#62;</button>
  )
}

export default ButtonBox
