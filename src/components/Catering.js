import React from 'react'
import {Link} from 'react-router-dom'

const Catering = () => {
    const style = {
        content: 'w-4/5 m-auto pt-10',
        headingContainer: 'flex flex-col text-center space-y-2',
        heading: 'text-4xl font-extrabold uppercase m-auto',
        subHeading: 'text-xl',
        borderBox: 'p-8  mt-8 md:m-8 border-2 border-red-900',
        text: 'leading-relaxed',
        cateringInfo: 'mt-8',
    }
  return (
    <div className={style.content}>
        <div className={style.borderBox}>
            <div className={style.headingContainer}>
                <h1 className={style.heading}>Love Crafthouse?</h1>
                <h3 className={style.subHeading}>Let us cater your next event!</h3>
            </div>
            <div className={style.cateringInfo}>
                <p className={style.text}>
                    With Craft House Catering, we offer the same deliciousness that you have  come to know. We take great pride in ensuring that all of your friends and family are provided with an 
                    exceptional menu, friendly service and unforgettable  experience. <br></br><br></br>
                    We work with each client to create an event customized for you and your  guests. Whether you are planning a corporate function , birthday bash,  holiday party or even a wedding reception, 
                    Craft House is here to help create  a special event specific to your needs. <br></br><br></br>
                    Each event is custom - for more information, please fill out Catering Form at  the bottom of the page  
                    Check out our <Link to='/FAQS' className='underline'>FAQS</Link> section prior to submitting requests please.</p>
            </div>
        </div>
    </div>
  )
}

export default Catering