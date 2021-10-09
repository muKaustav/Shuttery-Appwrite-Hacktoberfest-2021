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
          <span>
            <a
              href='https://appwrite.io/'
              target='_blank'
              className='appwrite-link'
              rel='noreferrer'
						>
              <img
                src='https://appwrite.io/images-ee/press/badge-gray-button.svg'
                alt='Built with Appwrite'
                height='36'
                width='auto'
							/>
            </a>
          </span>
        </h1>
      </footer>
    </div>
  )
}

export default Footer
