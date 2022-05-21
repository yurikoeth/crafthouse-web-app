import React from 'react'

const Order = () => {

  const style = {
    hero:' bg-orderHero w-full h-fit bg-cover bg-center text-white',
    overlay: 'bg-black/60 h-screen w-full flex',
    content: ' h-fit w-4/5 m-auto',
    headingContainer: 'w-full h-fit flex-col text-center',
    buttonContainer: 'mt-16 w-full h-1/2 flex align-middle content-center',
    heading: 'text-4xl p-1 md:text-8xl  m-auto font-extrabold',
    button: " px-6 py-2 w-2/5 rounded bg-red-800 hover:bg-rose-500 text-rose-100 m-auto "
  }

  const grubHub = () => {
    window.open("https://www.grubhub.com/restaurant/craft-house-60-van-duzer-st-staten-island/2415070");
  }

  const takeOut = () => {
    window.open("https://www.toasttab.com/craft-house-60-van-duzer-st");
  }
  
return (
    <div className={style.hero}>
      <div className={style.overlay}>
          <div className={style.content}>
            
            <div className={style.headingContainer}>  
              
              <h1 className={style.heading}>Ready to Order?</h1>
            </div>
            <div className={style.buttonContainer}>
              <button className={style.button} onClick={grubHub}>Local Delivery</button>
              <button className={style.button} onClick={takeOut}>Pick-up in Store</button>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Order