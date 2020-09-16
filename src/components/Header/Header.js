import React from 'react'
// import img1 from '/static/img/img1.jpg'
// import img2 from '/static/img/img2.jpg'
import './Header.css'

export default function Header() {
  return (
  <header className='header'>
    <div className="background-img">
      <img className="image-1" src='/static/img/img1.jpg' alt='headerImg1'/>
      <img className="image-2" src='/static/img/img2.jpg' alt='headerImg2'/>
    </div>
    <section className="header-content">
      <h1 className='header header-title'>Transactionary.</h1>
      <h3 className='header header-subtitle'>Securely upload and save your all of your transactions. Take action with Transactionary.</h3>
      <h4 className="name-sig">Created By George Brown</h4>
    </section>
  </header>
  )
}