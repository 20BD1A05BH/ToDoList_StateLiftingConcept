import React from 'react'

function TodoCount({todos}) {
  return (
    <div>
      <p className='display-4 text-center' style={{color:'#070A52'}}>Todo count</p>
      <hr />
      <h2 className='text-center text-success'>{todos.length}</h2>
    </div>
  )
}

export default TodoCount