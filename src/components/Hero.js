import React from 'react'
import logo from './assets/logo.png';

const Section = () => {
  const style = {
    hero: ' bg-headerHero w-full h-screen bg-cover bg-center',
    overlay: 'bg-black/60 h-screen w-full flex',
    logo: 'h-40 m-auto md:h-2/5'

  }

  return (
    <div className={style.hero}>
      <div className={style.overlay}>
        <img className={style.logo} src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default Section