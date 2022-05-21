import React from 'react'

const Menu = () => {
    const style = {
        mainContainer: 'bg-black flex h-fit p-8 w-full text-white',
        headingContainer: 'h-20 mt-6 w-full text-center',
        content: 'w-full h-fit flex-col',
        heading: ' font-extrabold text-4xl',
        textbox: 'p-8  mt-4 md:m-8 border-2 border-red-900',
        button: " px-6 py-2 sm:w-4/5 md:w-2/5 rounded bg-red-800 hover:bg-rose-500 text-rose-100 m-auto ",
        buttonContainer: 'flex mt-6 p-10 '
    }

  return (
    <div className={style.mainContainer}>
        <div className={style.content}>
            <div className={style.headingContainer}>
                <h1 className={style.heading}>What We Do</h1>
            </div>
            <div className='flex-col md:flex justify-between'>
                <div className={style.textbox}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className={style.textbox}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className={style.textbox}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Menu