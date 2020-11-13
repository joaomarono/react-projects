import React, { useState } from 'react'
import data from './data'
import List from './List'
import './index.css'
function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length == 0 ? <h5>There are no birthdays left today</h5> : null}
        <button type='button' onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </main>
  )
}

export default App
