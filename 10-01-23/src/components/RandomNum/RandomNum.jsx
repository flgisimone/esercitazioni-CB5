import React, {useState} from 'react'
import "./RandomNum.scss"

const RandomNum = () => {

    const [numSort, setNumSort] = useState([])

    const randomNum = () =>{

    const num = Math.floor(Math.random()*91);
    setNumSort(numberPush => [...numberPush, num])

    }

  return (
    <div className='container'>
    <h1>Lotteria della fantasia</h1>
    <button className={numSort.length < 6 ? "btnRandom" : "disabled"} onClick={randomNum} disabled={numSort.length < 6 ? false : true }>Genera il numero</button>
    <div className='containerNumber'>
      {numSort.map((number, index) => {
        return(
          <div key={index}>
            <span>{number}</span>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default RandomNum