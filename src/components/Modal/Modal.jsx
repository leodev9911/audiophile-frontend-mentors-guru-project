import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal ({ children }) {
  return ReactDOM.createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.querySelector('#modal')
  )
}
