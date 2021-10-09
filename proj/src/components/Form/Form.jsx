import React, { useState } from 'react'
import Image from '../Image/Image'
import loader from './loader.png'
import './Form.scss'

function Form () {
  const [query, setQuery] = useState('')
  const [orientation, setOrientation] = useState('landscape')
  const [count, setCount] = useState('')
  let [img, setImg] = useState([[]])
  let [idle, setIdle] = useState(true)

  let data = []

  const handleChangeQuery = e => {
    setQuery(e.target.value)
  }

  const handleChangeOrientation = e => {
    setOrientation(e.target.value)
  }

  const handleChangeCount = e => {
    setCount(e.target.value)
  }

  const handleSubmit = async () => {
    if (count === null || count < 1 || count > 10) {
      alert('Please enter a valid count (>0; <=10).')
    } else if (query === '') {
      alert('Please enter a valid query.')
    } else {
      if (idle) {
        setIdle(false)
      }

      let url =
				'https://api.unsplash.com/photos/random?query=' +
				query +
				'&orientation=' +
				orientation +
				'&count=' +
				count +
				'&client_id=zjZPpQjugZwWhIY5TF4CPeiVmL6T6HUg-11Ho6AfXGg'
      await fetch(url).then(response => response.json()).then(images => {
        images.forEach(image => {
          data.push([image.urls.small, image.links.html])
        })
        setImg(data)
      })
    }
  }

  return (
    <div>
      <div className='Form'>
        <div>
          <input
            className='query'
            type='text'
            name='query'
            placeholder='Enter search query'
            value={query}
            onChange={handleChangeQuery}
					/>
          <select
            className='orientation'
            name='orientation'
            id=''
            value={orientation}
            onChange={handleChangeOrientation}
					>
            <option value='landscape'>Landscape</option>
            <option value='portrait'>Portrait</option>
            <option value='squarish'>Squarish</option>
          </select>

          <input
            className='count'
            type='number'
            name='count'
            placeholder='Enter count: (Max 10)'
            max='10'
            value={count}
            onChange={handleChangeCount}
					/>
          <button
            className='submit'
            onClick={handleSubmit}
            type='submit'
            value='Get Images'
					>
						Get Images
					</button>
        </div>
      </div>
      <div className='image-container'>
        {idle
					? <img className='loader' src={loader} alt='loader' />
					: <Image data={img} />}
      </div>
    </div>
  )
}

export default Form
