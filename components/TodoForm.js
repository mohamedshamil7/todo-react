import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import { collection,  query, where, getDocs, onSnapshot, QuerySnapshot, addDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";

const TodoForm = () => {
    
  const [input, setInput] = useState("");

  const insertTodo=async()=>{
    input.trim()
    if(input.length<0) return 
    
    await addDoc(collection(db,'todos'),{
        text:input,
        completed:false
    })
    setInput('')
  }

  return (
    <div className="flex justify-between">
      <input className="border p-2 w-full text-xl" 
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="add your next task!!"
        value={input}
      />
      <button onClick={()=> insertTodo()} className="border p-4 ml-2 sm:mt-0 bg-purple-500 text-slate-100" ><AiOutlinePlus size={30}/></button>
    </div>
  );
};

export default TodoForm;
