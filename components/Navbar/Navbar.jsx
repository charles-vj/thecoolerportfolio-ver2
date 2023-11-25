import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        <h1 className="navbar-text">
          <Link href="/">
            C.
          </Link></h1>
        <div className="navbar-items">
          
        </div>
      </div>
    </Fade>
  )
}
