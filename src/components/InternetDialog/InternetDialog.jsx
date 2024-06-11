import { Close } from '@mui/icons-material'
import React from 'react'

export default function InternetDialog() {
  return (
    <div className="internet-dialog">
    <div className="toast">
      <div className="content">
        <div className="icon"><i className="uil uil-wifi"></i></div>
        <div className="details">
          <span>You're online now</span>
          <p>Hurray! Internet is connected.</p>
        </div>
      </div>
      <Close className="close-icon"/>
    </div>
  </div>
  )
}
