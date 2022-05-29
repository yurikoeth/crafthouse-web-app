import React from 'react'

const Bio = () => {
    const style = {
      mainContainer: 'bg-black flex h-fit p-8 pt-32 pb-32  w-full text-white',
      textBox: ' h-3/5 m-auto text-center ',
      heading: 'uppercase font-extrabold text-4xl m-auto',
      borderBox: 'p-8 lg:w-2/5 mt-8 m-auto border-2 border-red-900',
      bio: 'text-lg lg:text-xl'

    }

  return (
    <div className={style.mainContainer}>
      <div className={style.textBox}>
        <div>
          <h1 className={style.heading}>Welcome</h1>
        </div>
        <div className={style.borderBox}>
          <p className={style.bio}>Craft House was opened in Staten Island, NY in June 2014. We power the food program for Kills Boro Brew Pub. Led by Executive Chef Kurron Mangin, our  menu specializes in smoked meats, prepared on premise, as well as classic  southern comfort cuisine.</p>
        </div>
      </div>
    </div> 
  )
}
export default Bio