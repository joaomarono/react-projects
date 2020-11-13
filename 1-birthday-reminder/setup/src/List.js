import './index.css'
import React, { useState } from 'react'

const List = ({ people }) => {
  const [values, setValues] = useState(people)

  const handleClick = (id) => {
    let newPeople = values.filter((e) => {
      return e.id !== id
    })

    setValues(newPeople)

    document.getElementById('numberBirthdays').innerHTML = newPeople.length

    if (newPeople.length === 0) {
      document.getElementById('noMoreBirthdays').innerHTML =
        'There are no more birthdays!'
    }
  }

  return (
    <div id='birthdayList'>
      {values.map((e) => {
        const { image, id, name, age } = e

        return (
          <div className='person' key={id}>
            <img src={image} alt='' />
            <section>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button type='button' onClick={() => handleClick(id)}>
                Delete Birthday
              </button>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default List
