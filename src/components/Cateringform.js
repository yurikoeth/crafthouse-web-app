import React from 'react'

const Catering = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
 }
  
 if (mm < 10)
 {
   mm = '0' + mm;
 }

  today = yyyy + '-' + mm + '-' + dd;

  const style = {
    container: 'flex-col bg-black h-fit w-full text-white pt-16',
    headingContainer: 'flex mb-16',
    heading: 'text-4xl font-extrabold uppercase m-auto',
    form: 'w-4/5 m-auto md:w-1/3',
    sections: 'flex flex-col',
    labelWrapper: 'space-y-3 mb-6',
    label: 'uppercase text-xl',
    inputWrapper: 'space-y-6',
    input: 'w-full h-10 p-1 text-black',
    dateInput: 'w-fit h-10 p-1 text-black',
    timeInput: 'w-16 h-10 p-1 text-black',
    timeWrapper: 'flex flex-row space-x-4',
    flexInput: 'w-fit h-10 p-1 text-black',
    dropdown: 'bg-white text-black h-10',
    submit: 'bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-5 mb-12',
  }

  return (
    <div className={style.container}>
      <div className={style.headingContainer}>
        <h1 className={style.heading}>Catering Form</h1>  
      </div>
      <form className={style.form} action="mailto:crafthouse.events@gmail.com" method="post" enctype="text/plain">
        <ul className={style.sections}>
          <li className={style.labelWrapper}>
            <label for="name" className={style.label}>
              Name *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.input} type="text" id="firstname" name="name" placeholder='First Name' required></input>
              <input className={style.input} type="text" id="lastname" name="name"  placeholder='Last Name' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="email" className={style.label}>
              Email *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.input} type="email" id="email" name="email" placeholder='Email Address' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label className={style.label}>
              Phone *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.input} type="tel" id="telnum" name="telnum" placeholder='Phone Number' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="event" className={style.label}>
              Type of Event *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.input} type="text" id="event" name="event"  placeholder='Birthday, open-house, office party, etc' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="date" className={style.label}>
              Date *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.dateInput} type="date" id="date" name="date" placeholder='Date of Event' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="time" className={style.label}>
             Time *
            </label>
            <div className={style.timeWrapper}>
              <input className={style.timeInput} type="num" id="time" name='time' placeholder='ex: 9:30' max="12" required></input>
              <select className={style.dropdown} name="time" id="amPM">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="guestCount" className={style.label}>
             Guest Count *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.flexInput} type="num" id="guestCount" name="guestCount" placeholder='How many guests?' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="address" className={style.label}>
              Address *
            </label>
            <div className={style.inputWrapper}>
              <input className={style.input} type="text" id="street" name="address" placeholder='Street Address' required></input>
              <input className={style.input} type="text" id="city" name="address"  placeholder='City' required></input>
              <input className={style.input} type="text" id="state" name="address"  placeholder='State/Province' required></input>
              <input className={style.timeInput} type="num" id="zip" name="address"  placeholder='Zip' required></input>
            </div>
          </li>

          <li className={style.labelWrapper}>
            <label for="eventStyle" className={style.label}>
              Event Style *
            </label>
            <div className={style.inputWrapper}>
            <select className={style.dropdown} name="eventStyle" id="eventStyle">
                <option value="onPremise">On-Premise</option>
                <option value="dropoff">Drop-off Catering</option>
                <option value="fullService">Full-Service Catering</option>
              </select>
            </div>
          </li>
          <li>
            <input className={style.submit} type="submit" value="Submit"></input>
          </li>
        </ul>
      </form>
    </div>

  )
}

export default Catering