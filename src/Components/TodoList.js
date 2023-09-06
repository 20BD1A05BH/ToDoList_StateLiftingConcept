import { faCircleCheck, faTasks , } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import todoimg from '../images/svgimg1.svg'

function TodoList({todos}) {
  return (
    <div className="border-end border-5 p-3">
      <p className="display-5 text-center text-light list-item1 bg-dark">
        <FontAwesomeIcon icon={faTasks} className='text-danger' size='xs' />List of Todos</p>
      <hr />
      <img src={todoimg} className='w-50 mx-auto' alt=''></img>
      {/* display list of todos */}
      {
        todos.map((task,index)=><h3 className='text-danger text-center' key={index}><FontAwesomeIcon icon={faCircleCheck} className='text-warning' size='xs' />{task}</h3>)
      }
    </div>
  )
}

export default TodoList