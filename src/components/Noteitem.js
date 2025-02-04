import React, { useContext, useState, useRef, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  const [showModal, setShowModal] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [copied, setCopied] = useState(false); // New state for copy confirmation
  const modalContentRef = useRef(null);

  // Check if content overflows
  useEffect(() => {
    const checkScrollability = () => {
      if (modalContentRef.current) {
        const { scrollHeight, clientHeight } = modalContentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };
    checkScrollability();
  }, [showModal]);

  // Handle scroll event
  const handleScroll = () => {
    if (modalContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
      setIsScrollable(scrollTop + clientHeight < scrollHeight - 5);
    }
  };

  // Copy content to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(note.description)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await deleteNote(note._id);
      showAlert("Note deleted successfully", "success");
    } catch (error) {
      showAlert("Error deleting note", "danger");
      console.error("Error deleting note:", error);
    }
  };

  return (
    <>
      {/* Card Component */}
      <div className="col-md-3">
        <div
          className="card my-3 w-[300px] h-48 overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_6px_30px_rgba(0,0,0,0.15)] rounded-lg hover:shadow-blue-300"
          onClick={() => setShowModal(true)}
        >
          <div className="card-body">
            <h5 className="card-title text-xl md:text-xl font-bold text-blue-500">{note.title}</h5>
            <p className="card-text whitespace-nowrap overflow-hidden text-ellipsis max-h-24 mt-2">
              {note.description}
            </p>
            <div className="d-flex align-items-end mt-20">
              <i
                className="fa-regular fa-trash-can text-2xl md:text-xl hover:text-blue-500"
                onClick={handleDelete}
              ></i>
              <i
                className="far fa-edit mx-4 text-xl hover:text-blue-500"
                onClick={(e) => {
                  e.stopPropagation();
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-5 rounded-lg shadow-lg max-h-[80vh] overflow-hidden relative">
            <button
              className="absolute top-3 right-3 text-2xl font-bold hover:text-blue-500"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold text-blue-500">{note.title}</h2>
              <div className="relative">
                <i
                  className="far fa-copy text-2xl cursor-pointer hover:text-blue-500"
                  onClick={handleCopy}
                ></i>
                {copied && (
                  <span className="absolute top-[0px] right-[30px] text-sm bg-gray-200 px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </div>
            </div>
            <br />

            {/* Scrollable content area */}
            <div
              ref={modalContentRef}
              className="max-h-[60vh] overflow-y-auto pr-3"
              onScroll={handleScroll}
            >
              <p className="text-lg">{note.description}</p>
            </div>

            {/* Gradient Overlay */}
            {isScrollable && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Noteitem;
