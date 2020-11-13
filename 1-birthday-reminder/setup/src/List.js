import './index.css'
import React from 'react'
import data from './data'

const List = (props) => {
  return (
    <>
      {props.people.map((e) => {
        return (
          <div className='person'>
            <img src={e.image} alt='image' />
            <section>
              <h4>{e.name}</h4>
              <p>{e.age} years</p>
            </section>
          </div>
        )
      })}
    </>
  )
}

export default List
