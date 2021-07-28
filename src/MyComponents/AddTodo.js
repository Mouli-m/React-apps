import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        if(!date){
            setDate(new Date());
        }
        else {
            addTodo(title, desc, date);
            setTitle("");
            setDesc("");
            setDate("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Tasks</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task name"className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="What do you need to do?"className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Date</label> <br />
                    <DatePicker selected={date} value={date} className="form-control" id="date" onChange={(date) => setDate(date)} />
                </div> 
               
                <button type="submit" className="btn btn-sm btn-success">Save</button>
            </form>
        </div>
    )
}
