import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [notes,setnotes] = useState([])

  console.log("hello integration")

  function fetchNOtes(){
    axios.get("http://localhost:3000/notes")
   .then((res)=>{
       setnotes(res.data.notes)
   })
  }

  function OnSubmit(e){
      e.preventDefault()

      const {title,description} = e.target.elements

      axios.post('http://localhost:3000/notes',{
        title: title.value,
        description : description.value
      })
       .then(res=>{
           console.log(res.data)
       })
  }

  function onDelete(noteId){
         axios.delete('http://localhost:3000/notes/'+noteId)
         .then(res=>{
            console.log(res.data)
            fetchNOtes()
           
         })
  }

  useEffect(()=>{
    fetchNOtes()
  },[])




  return (
    <>
     <form className='create-all-notes' onSubmit={OnSubmit} >
        <input name='title' type="text" placeholder='title' />
        <input name='description' type="text" placeholder='description' />
        <button>create note</button>
     </form>
     <div className='notes' >
      {
        notes.map(note =>{
          return <div className='note' >
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={()=>{onDelete(note._id)}} >delete</button>
          </div>
        })
      }
        
        
     </div>
    </>
  )
}

export default App