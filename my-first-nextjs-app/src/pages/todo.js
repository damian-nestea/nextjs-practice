import React from 'react'

const Todo = ({ todo }) => {
    console.log(todo)
  return (
    <div className=' p-10'>
        <h1 className=' text-3xl mb-2'>Lista de Tarefas</h1>
        <ul className=' list-disc list-inside pl-4'>
            {
                todo.map((todoItem) => (
                    <li className=' italic first-letter:uppercase'>{todoItem.title} : {todoItem.completed.toString()}</li>
                ))
            }
        </ul>
    </div>
  )
}
export default Todo;

export const getServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoList = await res.json();
    return {
        props: {
            todo: todoList
        }
    }
}

