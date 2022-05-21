import React from 'react'

const Bio = () => {
    const style = {
      mainContainer: 'bg-black flex h-fit p-24 w-full text-white',
      textBox: ' h-3/5 w-4/5 md:w-2/5 m-auto text-center',
      heading: 'uppercase font-extrabold text-4xl',
      borderBox: 'p-8  mt-8 md:m-8 border-2 border-red-900',
      bio: 'text-lg'

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