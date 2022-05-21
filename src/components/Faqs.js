import React from 'react'

const Faqs = () => {
    const style = {
        container: 'bg-black text-white w-full h-fit pb-12',
        content: 'w-4/5 m-auto pt-10',
        headingContainer: 'flex flex-col text-center space-y-2',
        heading: 'text-4xl font-extrabold uppercase m-auto',
        subHeading: 'text-xl',
        text: 'leading-relaxed',
        cateringInfo: 'mt-8 mb-24',
        faqs: 'mt-10 space-y-10 p-8  mt-8 md:m-8 border-2 border-red-900',
        questions: ' flex-col space-y-10 divide-y divide-red-700 mb-20',
        question: 'mt-10 flex-col space-y-3',
        divide: ' ',
        borderBox: 'p-8  mt-8 md:m-8 border-2 border-red-900',

    }
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.faqs}>
            <div className={style.headingContainer}>
                <h1 className={style.heading}>FAQS</h1>
            </div>
                <div className={style.questions}>
                    <div className={style.question}>
                        <h3 className={style.subHeading}>What type of BBQ do you serve?</h3>
                        <p className={style.text}>We serve Memphis Style barbecue. We apply authentic southern cooking techniques and use only various wood  for all our on premises smoking.</p>
                    </div>
                    <div className={style.question}>
                    <br></br>
                        <h3 className={style.subHeading}>Can I make A reservation? </h3>
                        <p className={style.text}>We do not accept reservations.</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Do you offer on-site Events?</h3>
                        <p className={style.text}>We do offer semi private events as well as Full Buyouts of Space. Please shoot us email at crafthouse.events@gmail for all on site large party inquiries. </p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Are Children Allowed?</h3>
                        <p className={style.text}>Of course! We are a full service family establishment</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Are dogs Allowed?</h3>
                        <p className={style.text}> As much as we love our furry friends,only service animals, with paperwork, can enter our dining area or garden.  We do allow pets in our street side seating modules.</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Do you have vegetarian options?</h3>
                        <p className={style.text}>Yes! Our favorite is our house made bean burger. We have several sides , specials to accommodate your  request.</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}> What items are gluten free?</h3>
                        <p className={style.text}>Majority of our menu is gluten free EXCEPT empanadas, egg rolls & “out the fryer” choices. All sandwiches can be prepared with lettuce wrap to accommodate dietary restrictions.</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Do you have Televisions?</h3>
                        <p className={style.text}>Yes! We try our best to stay in tune to what is going on in all sports areas but we are not a  sports bar. We do not show any Pay per View Events.</p>
                    </div>
                    <div className={style.question}>
                        <br></br>
                        <h3 className={style.subHeading}>Who do I contact for music bookings?</h3>
                        <p className={style.text}>You can email us at 
                            <a href="mailto: crafthouse.events@gmail.com">crafthouse.events@gmail.com</a>
                        </p>
                    </div>          
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Faqs