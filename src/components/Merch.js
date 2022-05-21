import React from 'react'

const Merch = () => {
    const style = {
        mainContainer: 'bg-black flex h-fit p-8 w-full text-white',
        content: 'w-full h-fit flex-col',
        heading: ' font-extrabold text-4xl',
        textbox: 'p-8  mt-4 md:m-8 border-2 border-red-900',
        headingContainer: 'h-20 mt-6 w-full text-center',
    }

  return (
    <div className={style.mainContainer}>
    <div className={style.content}>
    <div className={style.headingContainer}>
                <h1 className={style.heading}>Coming Soon</h1>
            </div>
        <div className='flex-col md:flex justify-between'>
            <div className={style.textbox}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    </div>     
</div>
)
}

export default Merch