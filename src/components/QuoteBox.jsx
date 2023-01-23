import React from 'react'
import {ButtonBox} from './ButtonBox'
export const QuoteBox = ({random,changeElement,colorRandom
}) => {
    
  return (
    <article style={{color: colorRandom}}>
        <i class='bx bxs-quote-alt-left'></i>
        <p>{random.quote}</p>
        <h1>{random.author}</h1>
        
        <ButtonBox colorRandom={colorRandom} changeElement={changeElement}/>
    </article>
  )
}
