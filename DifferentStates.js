import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class DifferentStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  //elements, array, strings, number, booleans, null, PORTALS
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <br />
        <input placeholder="Elemtent" />
        <br />
        {[1, "array", <button>Button</button>]}
        <br />
        {"String"}
        <br />
        {10}
        <br />
        {true}
        <br />
        null
        <br />
        {null}
        <br />
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Portal
        </button>
        <Modal
          message="This is a portal"
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          I am a portal in the middle of the page
        </Modal>
      </div>
    );
  }
}

const Modal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <span className="message">{message}</span>
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.body
  );
};

export default DifferentStates;
