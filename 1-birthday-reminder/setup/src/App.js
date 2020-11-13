import React, { useState } from 'react'
import data from './data'
import List from './List'
import './index.css'

function App() {
  const [people, setPeople] = useState(data)

  const handlerChange = () => {
    document.getElementById('noMoreBirthdays').innerHTML =
      'There are no more birthdays!'

    document.getElementById('numberBirthdays').innerHTML = 0
  }

  return (
    <main>
      <div className='container'>
        <h3>
          <div id='numberBirthdays'>{people.length}</div> birthdays today
        </h3>
        <List people={people} />
        <div id='noMoreBirthdays'></div>
        <button type='button' onClick={() => handlerChange()}>
          Clear All
        </button>
      </div>
    </main>
  )
}

export default App
