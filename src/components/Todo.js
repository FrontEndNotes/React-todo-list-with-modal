import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        console.log('delete clicked', props.text);
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        console.log('closeModalHandler clicked', props.text);
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button type="button" className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            
            {modalIsOpen && <Modal onCancel={closeModalHandler} onCanfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
  }
  
  export default Todo;
  