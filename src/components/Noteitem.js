import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;
  const handleDelete = async () => {
    try {
      await deleteNote(note._id);
      showAlert("Note deleted successfully", "success");
    } catch (error) {
      showAlert("Error deleting note", "danger");
      console.error("Error deleting note:", error);
    }
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-regular fa-trash-can mx-2"onClick={handleDelete}></i>
            <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
