import React, { useState,useEffect } from 'react'
import TodoForm from './TodoForm'
import { collection,  query, where, getDocs, onSnapshot ,updateDoc,doc, deleteDoc} from "firebase/firestore"; 
import { db } from "../config/firebase";
import TodoList from './TodoList'
const style={
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`
}

function Body() {
  const [todos,setTodo] = useState([])

  async function fetchData(){

    const q = query(collection(db, "todos"));
    const unSubscribe= onSnapshot(q,(querySnapshot)=>{
      let todoArr=[]
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        todoArr.push({...doc.data(),id:doc.id})
      });
      setTodo(todoArr)

    })
    return ()=> unSubscribe()
  }


  useEffect(() => {
    fetchData()
  },[]);

  const toggleComplete= async(todo)=>{
    await updateDoc(doc(db,'todos',todo.id),{
      completed:!todo.completed
    })
  }

  const deleteTodo= async(id)=>[
    await deleteDoc(doc(db,'todos',id))
  ]


  return (
    <div className={style.bg}>
      <div className='bg-slate-100 max-w-[500px] m-auto rounded-md shadow-xl p-4'>

      
        <h1 className='text-3xl font-bold text-center text-gray-800 p-2'>Todo</h1>
        <TodoForm/>
        <ul>
          {
            todos.map((todo,index)=>{
              return <TodoList key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />

            })
          }  
        </ul>
        {todos.length<=0 ? null : <p className='text-center p-2'>{`you have ${todos.length} todos`}</p>}
       

        </div>
    </div>

  )
}

export default Body