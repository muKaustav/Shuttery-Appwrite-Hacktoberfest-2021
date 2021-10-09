import React from 'react'
import './Image.scss'

function Image(props) {
  return (
    <>
      {props.images.map((val, key) => {
        return (
          <div key={key} >
            <img src={val} className='image' alt='img' />
          </div>
        )
      })}
    </>
  )
}

export default Image
