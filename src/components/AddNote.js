import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = async (e) => {
        e.preventDefault();
        try {
          await addNote(note.title, note.description, note.tag);
          props.showAlert("Note added successfully", "success");
          setNote({ title: "", description: "", tag: "" });
        } catch (error) {
          props.showAlert("Error adding note", "danger");
          console.error("Error adding note:", error);
        }
      };

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2 className='text-6xl md-text-3xl font-bold mb-10'>Add a Note</h2>
            <form className="my-3 border-2 p-10 rounded-lg bg-opacity-50 bg-white">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-2xl md-text-xl">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label text-2xl md-text-xl">Description</label>
                    <input type="text" className="form-control h-20" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label text-2xl md-text-xl">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote