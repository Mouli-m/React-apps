import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
         <table className="table">
  <tbody>
    <tr>
      <td className="w-25" >{todo.title}</td>
      <td className="w-25">{todo.desc}</td>
      <td className="w-25">{todo.date}</td>
      <td className="w-25"><button type="button" className="btn btn-sm btn-success img-circle mx-3" onClick={()=>{onDelete(todo)}} >&#x2713;</button> 
           <button className="btn btn-sm btn-danger img-circle" onClick={()=>{onDelete(todo)}}>&#x2717;</button></td>
    </tr>
    
  </tbody>
</table>
        </>
    )
}
