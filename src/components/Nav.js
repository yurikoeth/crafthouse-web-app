import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import MobileNav from "./MobileNav.js"
import Dropdown from './Dropdown.js'
import Menu from './assets/Menu.pdf'
import PartyMenu from './assets/PartyMenu.pdf'
import CateringMenu from './assets/CateringMenu.pdf'


const Header = () => {
    
    const [sidebar, setSidebar] = useState(false)
    const [menu, setMenu] = useState(false);
    const [order, setOrder] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    
    const showMenu = () => {
        setMenu(!menu)
    } 

    const showOrder = () => {
        setOrder(!order)
    } 

    const style = {
        header: 'absolute  text-white h-screen w-full justify-between p-4 items-center',
        nav: ' w-full bg-stone-900/30',
        navList: ' float-right hidden md:flex gap-8 p-6 uppercase',
        navLink: 'hover:underline cursor-pointer',
        button: 'md:hidden',
        dropdown: 'space-y-4'
    }

  return (
    <div className={style.header}>
        <nav class={style.nav}>
            <ul class={style.navList}>
                <li><Link to='/' className={style.navLink}>Home</Link></li>
                <li onClick={showMenu}>
                    <div>
                        <p className={style.navLink}>Menu</p>
                            <ul className={menu ? 'flex flex-col pt-1 space-y-1' : 'hidden'}>
                                <li className={style.navLink}><a href={Menu} target="_blank">Dinner</a></li>
                                <li className={style.navLink}>Brunch</li>
                                <li className={style.navLink}><a href={PartyMenu} target="_blank">Party Menu</a></li>
                                <li className={style.navLink}><a href={CateringMenu} target="_blank">Catering Menu</a></li>
                            </ul>
                    </div>
                </li>
                <li><Link to='/Catering' class={style.navLink}>Catering</Link></li>
                <li><Link to='/FAQS' className={style.navLink}>FAQS</Link></li>
                <li className={style.navLink}>
                    <a href="https://www.toasttab.com/craft-house-60-van-duzer-st/giftcards?utmCampaign=onlineOrdering" target="_blank">
                        Gift Card
                    </a>
                </li>
                <li><a href="#contact" className={style.navLink}>Contact</a></li>
                <li className={style.dropdown} onClick={showOrder}>
                    <div>
                        <p className={style.navLink}>Order Now</p>
                            <ul className={order ? 'flex flex-col pt-1 space-y-1' : 'hidden'}>
                                <li className={style.navLink}>
                                    <a href="https://www.grubhub.com/restaurant/craft-house-60-van-duzer-st-staten-island/2415070" target="_blank">
                                        Local Delivery
                                    </a>
                                </li>
                                <li className={style.navLink}>
                                    <a href="https://www.toasttab.com/craft-house-60-van-duzer-st" target="_blank">Pickup In-Store</a>
                                </li>
                            </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <MobileNav 
        showSidebar={showSidebar} sidebar={sidebar} 
        showMenu={showMenu} menu={menu} 
        showOrder={showOrder} order={order}/>
    </div>
  )
}

export default Header