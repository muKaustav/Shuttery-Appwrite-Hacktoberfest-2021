import React from 'react'
import './Image.scss'

function Image(props) {

  return (
    <>
      {props.data.map((val, key) => {
        return (
          <div key={key} >
            <img src={val[0]} className='image' alt='img' />
            <a href={val[1]} target="_blank" className='download'
              rel="noopener noreferrer">Download</a>
          </div>
        )
      })}
    </>
  )
}

export default Image
