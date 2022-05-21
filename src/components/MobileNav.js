import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const MobileNav = ({showSidebar, sidebar, showMenu, menu, giftCard, showOrder, order, grubHub, takeOut}) => {
  const style = {
    container: 'md:hidden',
    links: 'uppercase flex flex-col justify-between',
    link: 'hover:underline cursor-pointer',
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = sidebar ? 'hidden' : 'auto';
  }, [sidebar])
  
return (
  <div className={style.container}>
    <div>
      {sidebar ?
      (
        <svg onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg> 
      )
      :
      (
        <svg onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ) 
      }
    </div>
    <div className={`flex top-0 right-0 w-[45vw] bg-black/90 p-10 text-white fixed h-full ease-in-out duration-300 md:hidden ${ sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className={style.links}>
      <li><Link to='/' onClick={showSidebar} className={style.navLink}>Home</Link></li>
      <li onClick={showMenu} className="divide-y-4">
                    <div>
                        <p className={style.link}>Menu</p>
                        <ul className={menu ? 'flex flex-col pt-2 space-y-2' : 'hidden'}>
                            <li className={style.link}>- Dinner</li>
                            <li className={style.link}>- Brunch</li>
                            <li className={style.link}>- Catering</li>
                            <li className={style.link}>- Parties</li>
                          </ul>
                    </div>
                </li>
                
                <li><Link to='/Catering' onClick={showSidebar} class={style.link}>Catering</Link></li>
                <li><Link to='/FAQS' onClick={showSidebar} className={style.link}>FAQS</Link></li>
                <li className={style.link}>
                  <a href="https://www.toasttab.com/craft-house-60-van-duzer-st/giftcards?utmCampaign=onlineOrdering" target="_blank">
                        Gift Card
                    </a>
                  </li>
                <li><Link to='/' onClick={showSidebar} className={style.link}>Contact Us</Link></li>
                <li className={style.dropdown} onClick={showOrder}>
                    <div>
                        <p className={style.link}>Order Now</p>
                            <ul className={order ? 'flex flex-col pt-1 space-y-1' : 'hidden'}>
                                <li className={style.link} onClick={grubHub}>- Local Delivery</li>
                                <li className={style.link} onClick={takeOut}>- Pickup In-Store</li>
                            </ul>
                    </div>
                </li>
      </ul>
    </div>
  </div>
  )
}

export default MobileNav