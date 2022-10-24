function Modal(props) {
  return (
    <div className="modal">
        <h1>Are you sure?</h1>
        <button type="button" className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
        <button type="button" className="btn" onClick={props.onCanfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
