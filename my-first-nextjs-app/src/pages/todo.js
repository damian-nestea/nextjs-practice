import Head from 'next/head'
import React from 'react'

const Todo = ({ todo }) => {
    console.log(todo)
  return (
    <div className=' p-10'>
        <Head>    
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        
            <title>Lista de Tarefas</title>
            <meta name="title" content="Lista de Tarefas" />
            <meta name="description" content="Lista de tarefas a serem cumpridas." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://localhost:3000/todo" />
            <meta property="og:title" content="Lista de Tarefas" />
            <meta property="og:description" content="Lista de tarefas a serem cumpridas." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://localhost:3000/todo" />
            <meta property="twitter:title" content="Lista de Tarefas" />
            <meta property="twitter:description" content="Lista de tarefas a serem cumpridas." />
            <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
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

