import React from 'react'
import './Footer.scss'

function Footer () {
  return (
    <div>
      <footer className='footer'>
        <h1 className='footer-text'>
					Made with ❤ by{' '}
          <span>
            <a
              href='https://github.com/muKaustav'
              target='_blank'
              rel='noreferrer'
              className='github'
						>
							kauC
						</a>
          </span>
        </h1>
      </footer>
    </div>
  )
}

export default Footer
