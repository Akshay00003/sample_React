import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoForm from './todo/TodoForm'
import UpdateForm from './todo/UpdateForm'
import TodoList from './todo/TodoList'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<TodoForm />} />
        <Route path='/:Tid' element={<UpdateForm />} />
        <Route path='/list' element={<TodoList />} />
    </Routes>

    </BrowserRouter>
  )
}


export default Router
